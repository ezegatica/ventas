import Link from "next/link";
import prisma from "../../../lib/prisma";
import { notFound } from "next/navigation";
import ImageCarousel from "../../../components/image-carousel";
import formatPrice from "../../../lib/format-price";

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
                  width="16"
                  height="20"
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
                className="mr-2 text-sm font-medium text-gray-900"
              >
                {item.nombre}
              </Link>
            </li>
          </ol>
        </nav>

        {/* <!-- Image gallery --> */}
        <ImageCarousel item={item} />

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {item.nombre}
            </h1>
          </div>

          {/* <!-- Options --> */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Informacion del producto</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {formatPrice(item.precio)}
            </p>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* <!-- Description and details --> */}
            <div>
              <h3 className="sr-only">Descripcion</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{item.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
