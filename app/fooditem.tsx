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
                    <Image src={item.strMealThumb} alt={item.strMeal} width={400} height={400} loading="eager" className="w-full my-4 rounded-2xl"/>
                    <figcaption className="mt-3 block text-center font-bold text-2xl">{item.strMeal}</figcaption>
                </figure>
            </div>
            <div>
                {item.strArea && <p className="my-3">Area: {item.strArea}</p>}
                {item.strCountry && <p className="my-3">Country: {item.strCountry}</p>}
                <p>Category: {item.strCategory}</p>

                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-100">
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
                <h3 className="text-2xl font-bold my-3">Instructions:</h3>
                <ol>
                    {
                        item.strInstructions?.split("\r\n").map((x,y)=>(
                            <li key={y}>{x}</li>
                        ))
                    }
                </ol>

                {item.strSource && <p className="my-3">Link:<a target="_blank" className="text-blue-500" href={item.strSource}>{item.strSource}</a></p>}
                {item.strYoutube && <p className="my-3">Youtube Link:<a target="_blank" className="text-blue-500" href={item.strYoutube}>{item.strYoutube}</a></p>}
            </div>
        </div>
        </>
    )
}