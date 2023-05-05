"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  async function searchItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const query = search.value;
    if (query) {
      router.push(`?q=${query}`);
    } else {
      router.push(`/`);
    }
  }

  return (
    <form onSubmit={searchItem}>
      <div className="w-full sm:max-w-xs">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="flex">
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            className="block w-full rounded-none rounded-l-md border-0 bg-white py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Buscar productos..."
            defaultValue={searchParams?.get("q") || ""}
          />
          <button
            type="submit"
            className="relative bg-white -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-150"
          >
            <MagnifyingGlassIcon
              className="-ml-0.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
              type="submit"
            />
          </button>
        </div>
      </div>
    </form>
  );
}
