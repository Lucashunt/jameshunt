import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Header from "../../comps/Header";
import Link from "next/link";
import axios from "axios";

function Dis({ p }) {
  return (
    <div className="w-full py-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span className="text-xl">Læs mere</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 font-extralight">
                {p}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

function Generelt({ pris, dato, tid, adresse, tilmelding, overskrift, p }) {
  return (
    <div>
      <h2 className="mb-4 text-3xl text-center sm:text-left">{overskrift}</h2>

      <Dis p={p} />
      <div className="grid grid-cols-2 my-4 gap-6 ml-4">

      <div>
          <h3 className="text-2xl">Adresse</h3>
          <p className="font-extralight">{adresse}</p>
        </div>

        <div>
          <h3 className=" text-2xl">Pris</h3>
          <p className="font-extralight">{pris},-</p>
        </div>

        <div>
          <h3 className="text-2xl">Dato</h3>
          <p className="font-extralight">{dato}</p>
        </div>

        <div>
          <h3 className="text-2xl">Tid</h3>
          <p className="font-extralight">{tid}</p>
        </div>

        <div>
          <h3 className="text-2xl">Kontakt</h3>
          <p className="font-extralight">
            Mobil: 42 53 11 04 <br />
            Email: james@yoga-nord.dk
          </p>
        </div>

        <div>
          <h3 className="text-2xl">Tilmelding</h3>
          <p className="font-extralight">{tilmelding}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ }) {



    const client = axios.create({
      baseURL: 'https://cdn.contentful.com',
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${process.env.API_KEY}`
      },
      params: {
        content_type: 'begivenheder'
      }
    })
    


    const response = await client.get('/spaces/v9sb7460yx5u/entries')
      const events = response.data.items
    
      

    return {
        props: {
            events,
           
        }, 
      };
}

const Begivenhedertest = (events) => {
    console.log("data", events )
  

  return (
    <div className="bg-background">
        <Header title="Begivenheder" description="Events page"/>
      <div className="px-10 sm:px-24">
      <h1 className="text-4xl text-center font-extralight py-20 my-20  rounded-3xl  bg-yellow-300/20">
          Begivenheder
        </h1>
        <div className="grid sm:grid-cols-3 gap-20">

           

        {events.events.map((event) => ( 
            <>
          
          <Generelt
            pris={event.fields.pris}
            dato={ new Date(event.fields.dato).toLocaleDateString([], { weekday: "long", month: 'long', day: 'numeric' })}
            tid={event.fields.tid}
            adresse={event.fields.adresse}
            tilmelding={event.fields.tilmelding}
            overskrift={event.fields.overskrift}
            p={<p>{event.fields.p.content[0].content[0].value}</p>}
          />
          </>
        ))}

<Generelt
            pris="Se pdf under læs mere"
            dato="D. 15 - 17 September"
            tid="Start Kl. 15"
            adresse="Rytsebækvej 17, 4780 Stege"
            tilmelding="Du er tilmeldt når du har bekræftet din deltagelse på Facebook, sms eller mail, og indbetalt til mobilepay nr.: 42 53 11 04. Mærk betaling med dato for workshoppen"
            overskrift="Weekend retreat"
            p={    <a
              href="/files/retreat.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >Hent pdf</a>}
          />

        </div>       
      </div>
    </div>
  );
};

export default Begivenhedertest;
