'use client';
import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { Item } from '@prisma/client';
export default function BuyButton({
  phone,
  item
}: {
  phone: string;
  item: Item;
}) {
  function consultarItem() {
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=Hola! Estoy interesado en el producto de tu venta de garage '${item?.nombre}'`
    );
  }
  return (
    <button
      aria-label="Add item to cart"
      disabled={item.vendido}
      onClick={consultarItem}
      className={clsx(
        'mt-2 flex w-full items-center justify-center bg-gray-700 p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100',
        {
          'cursor-not-allowed opacity-60': item.vendido
        }
      )}
    >
      {item.vendido ? 'No disponible!' : 'Consultar!'}{' '}
      <Image
        src="/whatsapp.svg"
        height={24}
        width={24}
        className="ml-2"
        alt="WhatsApp icon"
      />
    </button>
  );
}
