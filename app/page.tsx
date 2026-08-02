import Navbar from "./navbar";
import SearchFood from "./form";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="p-3">
        <h2 className="my-3 text-2xl font-bold">Search any Recipe or Food Item</h2>
        <SearchFood/>
      </main>
    </div>
  );
}
