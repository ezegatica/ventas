import Link from "next/link";
import Image from "next/image";
import Search from "./search";

export default function Navbar() {
  return (
    <header className="bg-gray-100 shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  className="block h-8 w-auto"
                  height={64}
                  width={64}
                  quality={25}
                  src="https://i.ezegatica.com/logo-64.png"
                  alt="Your Company"
                />
              </Link>
            </div>
          </div>
          <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}