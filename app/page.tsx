import { Metadata } from "next";
import ItemCard from "../components/ui/item-card";
import { getItems } from "../lib/querys";
import config from "./config";

export const preferredRegion = "home";
export const dynamic = "auto";
export const revalidate = 3600;


export const metadata: Metadata = {
  title: config.siteName,
  description: "Sitio de compra de productos usados que ya no necesito. Todos los productos se encuentran en buen estado y funcionando.",
  openGraph: {
    type: "website",
    title: config.siteName,
    description: "Sitio de compra de productos usados que ya no necesito. Todos los productos se encuentran en buen estado y funcionando.",
    images: [
      {
        url: `${config.siteUrl}/api/og/home`,
        width: 1200,
        height: 630,
        alt: "Imagen de portada"
      }
    ]
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | null };
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
