import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" bg-default">
        <div className="py-20 mx-10 text-white sm:mx-36">
          <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-9 place-items-center">
          <div className="">
            <h1 className="mb-8 font-bold uppercase">Generelt</h1>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Læs mere</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Lorem, ipsum.</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Lorem, ipsum dolor.</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Kranio</p>
          </div>
          <div className="">
            <h1 className="mb-8 font-bold uppercase">Meditation</h1>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Læs mere</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Lorem, ipsum.</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Lorem, ipsum dolor.</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Kranio</p>
          </div>
          <div className="hidden sm:block">
            <h1 className="mb-8 font-bold uppercase">Yoga</h1>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Læs mere</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Lorem, ipsum.</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Lorem, ipsum dolor.</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Kranio</p>
          </div>
          <div className="hidden sm:block">
            <h1 className="mb-8 font-bold uppercase">Kontakt</h1>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Læs mere</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Lorem, ipsum.</p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2">Lorem, ipsum dolor.</p>
            <p className="inline-block px-2 mt-3 font-extrabold transition duration-300 ease-in-out bg-blue-600 rounded-full hover:translate-x-2"><Link href="https://www.facebook.com/Jameshunt.dk">F</Link></p>
          </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Footer;
