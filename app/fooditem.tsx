"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import type { Meal } from "./types/meal";


export default function FoodItem({ foodItem }: { foodItem: string }) {

    const [item, setItem] = useState<Meal | null>(null)
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(true);

    const api = process.env.NEXT_PUBLIC_SEARCHAPI;
    const url = `${api}?s=${encodeURIComponent(foodItem)}`;

    useEffect(() => {
        async function fetchFoodDetails() {

        setLoading(true);
        setError("");

            try {
                const res = await fetch(url);
                if (!res.ok) { throw new Error("Failed to fetch Data,try Again") }
                const data = await res.json();
                const details = data.meals[0];
                console.log(data.meals);
                if (details) { setItem(details) }
                else{setError("Recipe not found")}
            }
            catch (err){
                console.error(err);
                    setError("Unable to load recipe. Please try again.");
            }
            finally{
            setLoading(false);
            }
        }
        fetchFoodDetails()
    }, [url]);

    
if (loading) {
    return (
        <p className="text-center text-lg py-10">
            Loading recipe...
        </p>
    );
}


if (error) {
    return (
        <p className="text-center text-red-600 py-10">
            {error}
        </p>
    );
}

    if (!item) return null;

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <figure className="sticky top-6">
                    <Image src={item.strMealThumb} alt={item.strMeal} width={400} height={400} loading="eager" className="w-full mb-4 rounded-2xl"/>
                    <figcaption className="mt-3 block text-center font-bold text-2xl text-slate-800
">{item.strMeal}</figcaption>
                </figure>
            </div>
            <section className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                {item.strArea && <p className="text-slate-600 mb-2"><span className="font-semibold text-slate-800">Area : </span> {item.strArea}</p>}
                {item.strCountry && <p className="text-slate-600 mb-2"><span className="font-semibold text-slate-800">Country : </span>{item.strCountry}</p>}
                <p className="text-slate-600 mb-2"><span className="font-semibold text-slate-800">Category :</span> {item.strCategory}</p>

                <table className="w-full overflow-hidden border border-slate-200 mt-4">
                    <thead className="bg-slate-100 text-slate-800">
                        <tr >
                            <th className="border p-2 text-left">Ingredient</th>
                            <th className="border p-2 text-left">Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: 20 }, (_, i) => {
                            const ingredient = item[`strIngredient${i + 1}`]?.trim();
                            const measure = item[`strMeasure${i + 1}`]?.trim();

                            if (!ingredient) return null;

                            return (
                                <tr key={i}>
                                    <td className="border p-2">{ingredient}</td>
                                    <td className="border p-2">{measure || "-"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <h3 className="text-2xl font-bold text-slate-900 my-3">Instructions:</h3>
                <ol className="leading-8 text-slate-700">
                    {
                        item.strInstructions?.split("\r\n").map((x,y)=>(
                            <li key={y}>{x} <hr /></li>
                        ))
                    }
                </ol>

                {item.strSource && <p className="my-3"><span className="font-semibold text-slate-800">Link : </span><a target="_blank" className="text-blue-500" href={item.strSource}>{item.strSource}</a></p>}
                {item.strYoutube && <p className="my-3"><span className="font-semibold text-slate-800">Youtube Link : </span><a target="_blank" className="text-blue-500" href={item.strYoutube}>{item.strYoutube}</a></p>}
            </section>
        </div>
        </>
    )
}