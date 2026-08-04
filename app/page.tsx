import SearchFood from "./form";

export default function Home() {
  return (
    <div className="container mx-auto">
        <h2 className="my-3 text-2xl font-bold">Find Your Favorite Recipes</h2>
        <SearchFood/>
    </div>
  );
}
