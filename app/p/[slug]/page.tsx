import prisma from "../../../lib/prisma";
import { notFound, redirect } from "next/navigation";
import formatPrice from "../../../lib/format-price";
import Image from "next/image";
import { get } from "@vercel/edge-config";
import Link from "next/link";
import { Gallery } from "../../../components/gallery";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = await prisma.item.findUnique({
    where: {
      slug: params.slug,
    },
  });

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
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <Link
                  href="/"
                  className="mr-2 text-sm font-medium text-gray-900"
                >
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
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 md:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <div className="lg:col-span-4">
                <Gallery
                  images={item.imagen.map((image) => ({
                    src: image,
                    altText: item.nombre,
                  }))}
                />
              </div>
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {item.nombre}
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Informacion del producto
                </h3>

                <p className="text-2xl text-gray-900">
                  {formatPrice(item.precio)}
                </p>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">
                  Descripcion del producto
                </h3>

                <p className="text-md font-medium text-gray-900">
                  {item.descripcion}
                </p>

                <form action={consultarItem}>
                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Consultar!{" "}
                    <Image
                      src="/whatsapp.svg"
                      height={24}
                      width={24}
                      className="ml-2"
                      alt="Whatsapp icon"
                    />
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
