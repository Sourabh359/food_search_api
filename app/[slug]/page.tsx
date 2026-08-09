import FoodItem from "../fooditem";

export default async function Home({params}:{params: Promise<{ slug: string }>}) {

    const data=await params;
    const item=data.slug;
    const itemName=decodeURIComponent(item);

  return (
    <div className="container mx-auto">
      <div className="p-3">
        <h2 className="text-3xl font-bold text-center text-slate-900
tracking-tight mb-6">{itemName}</h2>
        <FoodItem foodItem={itemName}></FoodItem>
      </div>
    </div>
  );
}