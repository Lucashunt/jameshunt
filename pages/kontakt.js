import Image from "next/image";
import Link from "next/link";
import headerImage from "../public/JamesSortUdenBaggrund.jpg";

const kontakt = () => {
  return (
    <div className="bg-background">
      <div className="px-24">
        <h1 className="py-8 text-5xl text-center font-extralight">Kontakt</h1>

        <div className="grid-cols-3 gap-4 py-16 sm:grid">
          <div className="col-span-2 sm:mr-16">
           
               
                <div className="max-w-lg mt-8">
            <div className="grid grid-cols-1 gap-6 ">
              <label className="block">
                <span className="text-gray-700">Navn</span>
                <input type="text" className="bg-background
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  " placeholder="James Hunt"/>
              </label>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input type="email" className="
                bg-background
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  " placeholder="john@example.com"/>
              </label>
              <label className="block">
                <span className="text-gray-700">Emne</span>
                <input type="email" className="
                bg-background
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  " placeholder="Tilmelding hold"/>
              </label>
              <label className="block">
                <span className="text-gray-700">Additional details</span>
                <textarea className="
                bg-background
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-400
                    focus:ring-0 focus:border-black
                  " rows="3" placeholder="..."></textarea>
              </label>
              <button className="flex px-5 py-3 mt-6 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 justify-self-center">
          <Link href="/">Send besked</Link>
        </button>
          </div>
            </div>
          </div>
          <div className="h-auto text-white rounded-md shadow-2xl bg-default shadow-black">
            <div className="m-10">
              <h1 className="text-3xl text-center">Kontakt info</h1>
              <p className="mt-10 font-extralight">
              James Ingemann Hunt<br />
Nørretofte 20,
3200 Helsinge
<br /><br />
CVR nr.: 37122696<br />
Bankoplysninger: 0400-4019677325<br />
Mobilpay nr.: 42531104
<br /><br />
Email: james@jameshunt.dk <br />
Tel: 42531104
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default kontakt;
