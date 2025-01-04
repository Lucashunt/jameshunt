import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" bg-default text-white">
      
          <div className="grid sm:grid-cols-3 p-20 gap-20">
            

          <div className="flex sm:flex-col items-center">
            <div>
            <h1 className="mb-8 font-bold uppercase">Generelt</h1>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/about"><a>Om mig</a></Link></p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/firma"><a>Firma</a></Link></p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/videoguides"><a>Videoguides</a></Link></p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center">
            <div>
            <h1 className="mb-8 font-bold uppercase">Jeg tilbyder</h1>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/tilbyder/kraniosakral"><a>Kranio-Sakral Terapi</a></Link></p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/tilbyder/kropsterapi"><a>Kropsterapi</a></Link></p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/tilbyder/sleep"><a>Søvn</a></Link></p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/tilbyder/stressbehandling"><a>Stressbehandling</a></Link></p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/tilbyder/hold"><a>Mine hold</a></Link></p>
          

          </div>
          </div>


          <div className="flex sm:flex-col items-center">
            <div>
            <h1 className="mb-8 font-bold uppercase">Kontakt</h1>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><Link href="/kontakt"><a>Kontaktformular</a></Link></p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><a href="mailto:james@jameshunt.dk">james@jameshunt.dk</a></p>
            <p className="mt-3 transition duration-300 ease-in-out font-extralight hover:translate-x-2"><a href="Tel:42531104">+45 42 53 11 04</a></p>
            <p className="inline-block px-2 mt-3 font-extrabold transition duration-300 ease-in-out bg-blue-600 rounded-full hover:translate-x-2"><Link href="https://www.facebook.com/jameshunt.dk">Facebook</Link></p>
          </div>
          </div>

          </div>
          
        </div>
        
     
    </>
  );
};

export default Footer;
