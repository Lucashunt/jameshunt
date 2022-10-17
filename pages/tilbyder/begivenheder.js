import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

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

const Begivenheder = () => {
    
  return (
    <div className="bg-background">
      <div className="px-10 sm:px-24">
      <h1 className="text-4xl text-center font-extralight py-20 my-20  rounded-3xl  bg-blue-300/20">
          Begivenheder
        </h1>
        <div className="grid sm:grid-cols-3 gap-10">
          <Generelt
            pris="295"
            dato="Lørdag d. 5 November"
            tid="Kl. 10 - 12:30"
            adresse="Nørretoftevej 20, 3200 Helsinge"
            tilmelding="tilmelding"
            overskrift="Skuldre, nakke, yin og blide bevægelser"
            p={<p>På denne workshop arbejder vi med skuldre og nakke. Stress har tendens til at sætte sig i de områder med spændinger, til tider hovedpine, en følelse af træthed og svimmelhed som resultat af spændingerne. Gennem ásanas (stillinger) og åndedræt vil vi få løsnet op i muskler og sener og få skabt øget velvære. <br /><br /> Du vil få værktøjer til selv at arbejde med disse områder derhjemme.<br /><br />Workshoppen afsluttes med "Yin og blide bevægelser" er en yogaform, hvis sigte er at skabe balance gennem lige dele aktiv og passiv, blid og nærværende træning.<br /><br />Yin yoga er en blid og meditativ træning, der lader kroppen komme ind i en dyb oplevelse af afslapning og ro. Med ro i krop og sind skaber du restitution, større bevægelsesfrihed, og du bliver opmærksom. Du bliver guidet ind i stillingerne med fokus på åndedrættet, og stillingerne holdes afslappet i 3-5 min, hvor du opnår dybe og rolige stræk, der både smidiggør muskler, led og bindevæv.<br /><br />De blide bevægelser aktiverer musklerne, styrker din krop og hjælper til at skabe en balance mellem det passive og aktive.</p>}
          />

          <Generelt
            pris=""
            dato=""
            tid=""
            adresse=""
            tilmelding=""
            overskrift=""
            p=""
          />

          <Generelt
            pris=""
            dato=""
            tid=""
            adresse=""
            tilmelding=""
            overskrift=""
            p=""
          />
        </div>
      </div>
    </div>
  );
};

export default Begivenheder;
