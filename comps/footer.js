import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="text-white bg-black">
        <div className="p-5 ">
          <h1 className="mb-5 text-3xl font-extrabold">PERNILLE HUNT</h1>
          <div className="ml-4">
            <div className="flex justify-between">
              <p className=" hover:text-gray-400">
                <Link href="/contact">Kontakt</Link>
              </p>
              <p className="">+45 51 90 10 97</p>
            </div>
            <div className="flex justify-between">
              <p className="hover:text-gray-400">
                <Link href="/contact">Om mig</Link>
              </p>
              <p className="text-right text-white">Pernille.i.rask@gmail.com</p>
            </div>
          </div>

          <p className="mt-4 text-xs italic">Udviklet af Lucas Hunt</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
