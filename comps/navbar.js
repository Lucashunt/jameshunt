import Link from "next/link";
import { useState } from "react";

const Navbars = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="flex flex-wrap items-center p-3 bg-black">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">Hej

            <span className="text-xl font-bold tracking-wide text-white uppercase">
              James Hunt
            </span>
          </a>
        </Link>
        <button
          className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-green-600 lg:hidden hover:text-white"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <Link href="/">
              <a className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white">
                Forside
              </a>
            </Link>
            <Link href="/about">
              <a className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white">
                Om mig
              </a>
            </Link>
            <Link href="/contact">
              <a className="items-center justify-center w-full px-3 py-2 text-white rounded lg:inline-flex lg:w-auto hover:bg-green-600 hover:text-white">
                Kontakt
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
