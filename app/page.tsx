import { Metadata } from 'next';
import config from './config';
import { Suspense } from 'react';
import HomeItemGridLoading from '../components/layout/home-item-grid-loading';
import { getItems } from '../lib/querys';
import ItemCard from '../components/ui/item-card';

export const metadata: Metadata = {
  title: config.siteName,
  description:
    'Sitio de compra de productos usados que ya no necesito. Todos los productos se encuentran en buen estado y funcionando.',
  openGraph: {
    type: 'website',
    title: config.siteName,
    description:
      'Sitio de compra de productos usados que ya no necesito. Todos los productos se encuentran en buen estado y funcionando.',
    images: [
      {
        url: `${config.siteUrl}/api/og/home`,
        width: 1200,
        height: 630,
        alt: 'Imagen de portada'
      }
    ]
  }
};

export const dynamic = 'force-static';

export default async function Home() {
  const items = await getItems();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Productos a la venta
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Suspense fallback={<HomeItemGridLoading />}>
            {items.length > 0 ? (
              items.map(item => <ItemCard item={item} key={item.slug} />)
            ) : (
              <p className="text-2xl font-bold text-gray-900">
                No se encontraron items a la venta!
              </p>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
