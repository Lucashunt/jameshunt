import Image from "next/image";
import Link from "next/link";
import hav from "../public/hav.jpeg";

const kropsterapi = () => {
  return (
    <div className="bg-background">
      <div className="px-24">
        <Image alt="change" src={hav} placeholder="blur" priority />

        <h1 className="my-8 text-6xl text-center font-extralight">
          Krops Terapi
        </h1>

        <div className="grid grid-cols-3 gap-4 py-16">
          <div className="col-span-2 mr-16">
            <div className="mb-14">
              <h1 className="mb-4 text-3xl">Hvordan foregår en behandling?</h1>
              <p className=" font-extralight">
                Følelser lagres i kroppen som spændinger og kan gennem hele
                livet reaktiveres som små hukommelses-myoser. Forbindelsen
                mellem krop og psyke bliver meget tydelig og håndgribelig, når
                man modtager kropsterapi. Igennem et liv bliver kroppen påvirket
                af det, vi tænker og føler, og samtidig påvirkes det, vi tænker
                og føler af vores kropsfornemmelse, så der foregår således en
                vekselvirkning mellem krop og sind. <br /><br /> I kropsbehandlingen arbejder
                vi med det bevidste åndedræt og med opspænding og afspænding af
                de områder af kroppen, som bærer på gamle traumer. Ved at
                manipulere disse områder og ved at spænde op i en rum tid for
                derefter at spænde af kan man forløse traumer. I terapien kan
                man reagere meget forskelligt både følelsesmæssigt og kropsligt.
                Nogle vil græde, andre vil ikke, der kan komme gamle minder og
                billeder frem og erkendelser, og fysiske følelser som varme og
                kulde er også normale reaktioner. Når vi gennem livet spænder
                op, gør vi det for at beskytte os selv, fordi der tidligt i
                vores liv har været grund til det. Det har med andre ord været
                en måde at håndtere livet på, men det er blevet til en
                uhensigtsmæssig vane, som blokerer for, at der kan strømme
                energi igennem vores krop. <br /><br />Når vi ikke har den fulde
                energi-gennemstrømning og er låste i vores kroppe, er det
                vanskeligt at være fuldt til stede i livet og føle vitalitet og
                glæde, og det er dermed også sværere at træffe de rigtige
                beslutninger. Over tid vil du opnå et bedre kendskab til din
                krops særlige måder at spænde op, og jeg vil kunne hjælpe dig
                med øvelser, som er tilegnet dig, sådan at du også selv kan
                praktisere derhjemme.<br /><br /> Der vil være tale om et forløb af kortere
                eller længere varighed alt afhængig af, hvad du kommer med af
                problematikker.
              </p>
            </div>

            <div></div>
          </div>
          <div className="h-auto text-white rounded-md shadow-2xl bg-default shadow-black">
            <div className="m-10">
              <h1 className="text-3xl text-center">Generelt</h1>
              <p className="mt-10 font-extralight">
                <b>STED:</b> <br />
                Jeg har behandling i Helsinge og Smidsstrup.
                <br />
                Helsinge – Nørretofte 20, 3200 Helsinge
                <br />
                Smidsstrup – Digeshøj 7A, 3250 Gilleje (privat)
                <br />
                <br />
                <b>PRIS:</b>
                <br />
                60 – 70 min: kr. 600,-
                <br />
                Første gang ca 90 min: kr 800,-
                <br />
                Weekendstillæg: kr 100,-
                <br />
                <br />
                <b>KONTAKT:</b>
                <br />
                James@Jameshunt.dk eller james@yoga-nord.dk, mobil: 42 53 11 04
                <br />
                <br />
                <b>AFBUD:</b>
                <br />
                Afbud skal ske senest dagen før aftalte tid
                <br />
                <br />
                Jeg er medlem af og forsikret gennem foreningen “kranio-sakral
                og kropsterapeuter” Jeg tager løbende kurser i Kranio Sakral
                terapi og anatomi af RAB-certificerede lærer.
                <br />
                <br />
                Du kan læse mere om mig{" "}
                <Link href="/about">
                  <a className="font-bold text-blue-500 hover:text-blue-500/50">
                    her
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <h1 className="mt-12 mb-8 text-4xl text-center font-extralight">
          Anmeldelser
        </h1>
        <div className="grid grid-cols-3 gap-8 pb-8 text-white place-items-start">
          <div className="transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
            <div className="m-2">
              <div className="text-4xl italic text-left">&quot;</div>
              <div className="mx-8">
                <p className="text-center font-extralight">
                  Kære James, efter behandling hos dig har jeg bare ingen
                  smerter. En fantastisk fornemmelse i min nakke. Jeg føler jeg
                  kan dreje hovedet hele vejen rundt ;-). Tak tak tak. <br />{" "}
                  <br />
                </p>
                <p className="italic font-thin text-center">
                  - Maren Andreasen
                </p>
              </div>
              <div className="h-5 text-4xl italic text-right">&quot;</div>
            </div>
          </div>

          <div className="transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
            <div className="m-2">
              <div className="text-4xl italic text-left">&quot;</div>
              <div className="mx-8">
                <p className="text-center font-extralight">
                  Jeg bliver behandlet med Kranio-sakral terapi, på grund af en
                  langvarig hjernerystelse (post commotionelt syndrom) og deraf
                  følgende problemer med hovedpine, spændinger og stresstilstand
                  i kroppen. Efter blot to behandlinger hos James, har jeg
                  oplevet en forbedring i symptomniveau, og et generelt større
                  velvære. Jeg oplever at behandlingen er med til at skubbe min
                  krop (og hovedet) i den rigtige retning. KST er en yderst mild
                  og behagelig behandlingsform, og min krop reagerer med en
                  fantastisk ro og en enorm træthed efter behandlingen
                  <br /> <br />
                </p>
                <p className="italic font-thin text-center">- Signe Narp</p>
              </div>
              <div className="h-5 text-4xl italic text-right">&quot;</div>
            </div>
          </div>

          <div className="transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
            <div className="m-2">
              <div className="text-4xl italic text-left">&quot;</div>
              <div className="mx-8">
                <p className="text-center font-extralight">
                  James’ behandlinger møder min krop lige, hvor den er, hvilket
                  for min krop betyder, at den føler sig mødt og dermed kan
                  slippe spændingerne. Kan varmt anbefales.
                  <br /> <br />
                </p>
                <p className="italic font-thin text-center">- Anette, 57 år</p>
              </div>
              <div className="h-5 text-4xl italic text-right">&quot;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kropsterapi;
