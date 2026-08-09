import Image from "next/image";
export default function About() {
  return (
    <div className="container mx-auto py-10 text-center bg-slate-50">
        <section>
      <h2 className="text-3xl font-bold text-slate-900">About Food Search Application</h2>
      <p className="my-4 text-lg text-slate-600 mx-auto">Discover thousands of delicious recipes from around the world using TheMealDB API.</p>
        </section>
        <section className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-3xl font-bold text-slate-900">About Project</h2>
            <p className="py-5 text-slate-500">This Food Search Application allows users to search recipes,
view ingredients, cooking instructions, and meal details
using TheMealDB API.</p>
            <p className="text-slate-500">The goal of this project is to practice modern web
development using Next.js and TypeScript while building
a responsive and SEO-friendly application.</p>
        </section>
        <section>
            <h2 className="text-3xl font-bold text-slate-900 my-10">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <section className="bg-white rounded-xl shadow-md border border-slate-200 p-3 text-center flex justify-center items-center gap-3">
              <h3 className="text-2xl font-bold">Next.js</h3>
              <Image src="/next.svg" alt="NextJS logo" width={30} height={30}></Image>
              </section>
            <section className="bg-white rounded-xl shadow-md border border-slate-200 p-3 text-center flex justify-center items-center gap-3">
              <h3 className="text-2xl font-bold">Reactjs</h3>
              <Image src="/reactjs.svg" alt="ReactJS logo" width={30} height={30}></Image>
              </section>
            <section className="bg-white rounded-xl shadow-md border border-slate-200 p-3 text-center flex justify-center items-center gap-3">
              <h3 className="text-2xl font-bold overflow-auto">Typescript</h3>
              <Image src="/typescript.svg" alt="Typescript logo" width={30} height={30}></Image>
              </section>
            <section className="bg-white rounded-xl shadow-md border border-slate-200 p-3 text-center flex justify-center items-center gap-3">
              <h3 className="text-2xl font-bold">Tailwind CSS</h3>
              <Image src="/tailwindcss.svg" alt="Tailwind css logo" width={30} height={30}></Image>
              </section>
            <section className="bg-white rounded-xl shadow-md border border-slate-200 p-3 text-center flex justify-center items-center gap-3">
              <h3 className="text-2xl font-bold">TheMealDB API</h3>
              </section>
            </div>
        </section>
        <section>
          <h2 className="my-8 text-3xl font-bold">Features</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4  gap-7 font-bold">
            <li>✔ Search Recipes</li>
            <li>✔ View Ingredients</li>
            <li>✔ Cooking Instructions</li>
            <li>✔ Meal Images</li>
            <li>✔ Responsive Design</li>
            <li>✔ SEO Friendly</li>
            <li>✔ Fast Performance</li>
          </ul>
        </section>
    </div>
  );
}
