import { notFound, redirect } from "next/navigation";
import formatPrice from "../../../lib/format-price";
import Image from "next/image";
import { get } from "@vercel/edge-config";
import Link from "next/link";
import { Gallery } from "../../../components/gallery";
import clsx from "clsx";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { getItemBySlug } from "../../../lib/querys";
import { Metadata } from "next";
import config from "@/app/config";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getItemBySlug(params.slug);
  if (!item) {
    return {
      title: "Producto no encontrado",
      description: "El producto que buscas no existe o fue eliminado.",
    };
  }
  const itemUrl = new URL(`${config.siteUrl}/p/${item.slug}`)
  const ogUrl = new URL(`${config.siteUrl}/api/og/item`);
  ogUrl.searchParams.set("title", item.nombre);
  ogUrl.searchParams.set("image", item?.imagen[0]);
  ogUrl.searchParams.set("price", item?.precio.toString());

  return {
    title: `${item?.nombre} - ${config.siteName}`,
    description: item?.short_descripcion,
    openGraph: {
      title: `${item?.nombre} - ${config.siteName}`,
      description: item?.short_descripcion,
      url: itemUrl.toString(),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: item.short_descripcion,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const item = await getItemBySlug(params.slug);

  if (!item) {
    notFound();
  }

  async function consultarItem() {
    "use server";
    const phone = await get("phone");
    redirect(
      `https://api.whatsapp.com/send?phone=${phone}&text=Hola! Estoy interesado en el producto de tu venta de garage '${item?.nombre}'`
    );
  }

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      {item.vendido && (
        <div className="border-l-4 border-red-400 bg-red-50 p-4">
          <div className="flex container">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                <span className="font-medium text-red-700 underline hover:text-red-600">
                  El producto ya fue vendido.
                </span>{" "}
                Guardate esta pagina, porque si por algun motivo se cancela la
                compra, podras comprarlo.
              </p>
            </div>
          </div>
        </div>
      )}
      <nav aria-label="Breadcrumb" className="pt-6 pb-4">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div className="flex items-center">
              <Link href="/" className="mr-2 text-sm font-medium text-gray-900">
                Items
              </Link>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li className="text-sm">
            <Link
              href={`/p/${item.slug}`}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {item.nombre}
            </Link>
          </li>
        </ol>
      </nav>
      <div className="lg:grid lg:grid-cols-6">
        <div className="lg:col-span-4">
          <Gallery
            images={item.imagen.map((image) => ({
              src: image,
              altText: `Imagen de ${item.nombre}`,
            }))}
          />
        </div>

        <div className="p-6 lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {item.nombre}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Informacion del producto
            </h3>

            <p className="text-2xl text-gray-900">{formatPrice(item.precio)}</p>
          </section>
          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading" className="sr-only">
              Descripcion del producto
            </h3>

            <p className="text-md font-medium text-gray-900">
              {item.descripcion}
            </p>
          </section>
          <form action={consultarItem}>
            <button
              aria-label="Add item to cart"
              disabled={item.vendido}
              type="submit"
              className={clsx(
                "mt-2 flex w-full items-center justify-center bg-gray-700 p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100",
                {
                  "cursor-not-allowed opacity-60": item.vendido,
                }
              )}
            >
              {item.vendido ? "No disponible!" : "Consultar!"}{" "}
              <Image
                src="/whatsapp.svg"
                height={24}
                width={24}
                className="ml-2"
                alt="WhatsApp icon"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
