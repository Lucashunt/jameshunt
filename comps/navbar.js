import Head from "next/head";
import Link from "next/link";


const Navbars = () => {
  return ( 
    <>
    <Head>
      <meta name="theme-color" content="#000000"></meta>
    </Head>

    
    <div className="bg-background">
    <div className="pt-6 text-4xl font-bold tracking-wide text-center text-default"><Link href="/"> James Hunt</Link></div>
    <div className="flex items-center justify-center py-4 font-light">
      
        <ul className="flex">
          <li>
            <Link href="/kraniosakral"><a className="transition duration-300 rotate-45 middle hover:text-gray-600">Kraniosakral</a></Link>
          </li>
          <li>
            <Link href="/"><a className="ml-3 transition duration-300 rotate-45 middle hover:text-gray-600">Yoga</a></Link>
          </li>
          <li>
            <Link href="/"><a className="ml-3 transition duration-300 rotate-45 middle hover:text-gray-600">Meditation</a></Link>
          </li>
          <li>
            <Link href="/"><a className="ml-3 transition duration-300 rotate-45 middle hover:text-gray-600">Om mig</a></Link>
          </li>
          <li>
            <Link href="/"><a className="ml-3 transition duration-300 rotate-45 middle hover:text-gray-600">Kontakt</a></Link>
          </li>
          
        </ul>
    </div>
    </div>
    </>
   );
}
 
export default Navbars;

