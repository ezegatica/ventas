import prisma from "@/lib/prisma";
import ItemCard from "../components/ui/item-card";
import { getItems } from "../lib/querys";

export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = (searchParams?.q as string) || "";

  const items = await getItems(query);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {query ? "Resultados de la búsqueda" : "Productos a la venta"}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.length > 0 ? (
            items.map((item) => <ItemCard item={item} key={item.slug} />)
          ) : (
            <p className="text-2xl font-bold text-gray-900">
              No se encontraron resultados para &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
