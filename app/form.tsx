"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strCountry: string;
    strArea: string;
}

export default function SearchFood() {
    const [food, setFood] = useState("");
    const [items, setItems] = useState<Meal[]>([]);
    const [err, setErr] = useState("");

    const api = process.env.NEXT_PUBLIC_SEARCHAPI;

    console.log(items);


    const searchFood = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const url = `${api}?s=${food}`;

        try {
            const x = await fetch(url);
            if (!x.ok) {
                throw new Error("x.status");
            }
            const y = await x.json();

            if(y.meals){
                setItems(y.meals);
                setErr(`${y.meals.length} items found`);
            }
            else{
                setItems([]);
                setErr("no food found")
            }
        }
        catch (err) {
            console.warn(err);
            setErr("API Error, try again") 
        }
    }
    return (
        <form onSubmit={searchFood}>
            <label className="me-3">Search :
                <input className="border border-slate-300 rounded py-2 px-4 focus:ring-2 focus:ring-orange-500 outline-none" type="search" name="food" placeholder="Search Food" value={food} onChange={(e) => setFood(e.target.value)} required autoFocus />
            </label>
            <button className="px-6 py-2 rounded p-2 m-3 bg-orange-500 hover:bg-orange-600 text-white transition" type="submit">Search</button>
            <output>{err}</output>

            <div className="grid  grid-cols-2 gap-4 mt-5">
                {
                    items.map( elem => (
                        <section key={elem.idMeal} className="border rounded-2xl p-3">
                            <Link href={elem.strMeal.replace(" ","-")} className="block overflow-auto">
                            <Image src={elem.strMealThumb} alt={elem.strMeal} width={200} height={200} className="float-end rounded-xl"></Image>
                            <h3 className="text-2xl">{elem.strMeal}</h3>
                            <p>Category : {elem.strCategory}</p>
                            <p>Country : {elem.strCountry}</p>
                            <p>Area : {elem.strArea || "n/a"}</p>
                            </Link>
                        </section>
                    ))
                }
            </div>
        </form>
    )
}
