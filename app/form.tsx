"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Meal } from "./types/meal";


export default function SearchFood() {
    const [food, setFood] = useState("");
    const [items, setItems] = useState<Meal[]>([]);
    const [err, setErr] = useState("");
    const [message, setMessage] = useState("");

    const api = process.env.NEXT_PUBLIC_SEARCHAPI;


    const searchFood = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const url = `${api}?s=${encodeURIComponent(food.trim())}`;


        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`);
            }
            const data = await res.json();

            if (data.meals) {
                setItems(data.meals);

                setMessage(`${data.meals.length} items found`);
            }
            else {
                setItems([]);
                setMessage("no food found")
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
            <p className="inline">{message || err}</p>

            <div className="grid  lg:grid-cols-2 gap-6 mt-5">
                {
                    items.map(elem => (
                        <section key={elem.idMeal} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <Link href={encodeURIComponent(elem.strMeal)} className="block overflow-auto">
                                <Image src={elem.strMealThumb} alt={elem.strMeal} width={200} height={200} className="min-[425px]:float-end rounded-xl max-[425]:w-fit max-[425]:m-auto"></Image>
                                <div className="p-6">
                                <h3 className="text-3xl font-bold text-slate-800 mb-4">{elem.strMeal}</h3>
                                <p className="text-slate-600 mb-2"><span className="font-semibold text-slate-800">Category :</span> {elem.strCategory}</p>
                                <p className="text-slate-600 mb-2"><span className="font-semibold text-slate-800">Country :</span> {elem.strCountry}</p>
                                <p className="text-slate-600 mb-2"><span className="font-semibold text-slate-800">Area :</span> {elem.strArea || "n/a"}</p>
                                </div>
                            </Link>
                        </section>
                    ))
                }
            </div>
        </form>
    )
}
