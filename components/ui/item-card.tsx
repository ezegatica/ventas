import { Item } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import formatPrice from "../../lib/format-price";

type ItemCardProps = {
  item: Item;
};

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/p/${item.slug}`}>
      <div className="group relative">
        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={item.imagen[0]}
            width={224}
            height={224}
            quality={60}
            loading="lazy"
            alt={`Imagen de ${item.nombre}`}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {item.nombre}
              {item.vendido && (
                <span className="ml-2 inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                Vendido
              </span>
              )}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {item.short_descripcion}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {formatPrice(item.precio)}
          </p>
        </div>
      </div>
    </Link>
  );
}
