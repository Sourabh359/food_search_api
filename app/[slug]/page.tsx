import FoodItem from "../fooditem";

export default async function Home({params}:{params: Promise<{ slug: string }>}) {

    const data=await params;
    const item=data.slug;
    const itemName=item.replaceAll("-"," ");

  return (
    <div className="container mx-auto">
      <div className="p-3">
        <h2 className="text-3xl font-bold text-center">{itemName}</h2>
        <FoodItem foodItem={itemName}></FoodItem>
      </div>
    </div>
  );
}