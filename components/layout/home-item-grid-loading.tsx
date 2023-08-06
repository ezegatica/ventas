import React from 'react';

export default function HomeItemGridLoading() {
  return (
    <>
      <ItemGridLoadingCard />
      <ItemGridLoadingCard />
      <ItemGridLoadingCard />
    </>
  );
}

function ItemGridLoadingCard() {
  return (
    <div className="group relative animate-pulse">
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <div className="flex items-center justify-center h-full w-full object-cover object-center lg:h-full lg:w-full mb-4 bg-gray-400 rounded">
          <svg
            className="w-10 h-10 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0"></span>
            <div className="h-3 bg-gray-300 rounded-full w-32"></div>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            <div className="flex items-center w-full space-x-2 mt-2">
              <div className="h-2.5 bg-gray-400 rounded-full w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full w-24"></div>
              <div className="h-2.5 bg-gray-400 rounded-full w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 mt-1">
              <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
              <div className="h-2.5 bg-gray-400 rounded-full w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full w-full"></div>
            </div>
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          <div className="h-3 bg-gray-500 rounded-full w-20"></div>
        </p>
      </div>
    </div>
  );
}
