import Link from "next/link";

import Header from "../comps/Header";

const errorPage = () => {
    return ( 
    <>
        <Header title="404" description="404"/>
        <div className="flex flex-col items-center justify-center h-screen text-white bg-default">
            <h1 className="text-4xl border-b-2 border-white">404</h1>
            <p className="mt-4 text-lighter">Siden findes ikke</p>
            <button className="px-5 py-3 mt-6 bg-white rounded-md text-default"><Link href="/">Gå til forside</Link></button>
        </div>
    
    </> 
    );
}
 
export default errorPage;