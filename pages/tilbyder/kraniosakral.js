import Image from "next/image";
import Link from "next/link";
import Kranio from "../../public/Kranio.jpeg";

const kraniosakral = () => {
  return (
    <div className="bg-background">
      <div className="px-10 sm:px-24">
        <div className="hidden sm:block">
        <Image alt="change" src={Kranio} placeholder="blur" priority/>
        </div>
        <h1 className="py-16 text-4xl text-center sm:py-8 sm:text-6xl font-extralight">Kranio-Sakral Terapi</h1>

        <div className="grid-cols-3 gap-4 sm:py-8 sm:grid">
          <div className="col-span-2 sm:mr-16">
            <div className="mb-14">
              <h1 className="mb-4 text-3xl text-center sm:text-left">Hvordan foregår en behandling?</h1>
              <p className=" font-extralight">
                En behandling starter altid med en kort samtale. Du fortæller
                lidt om dig selv, dine problematikker og dine forventninger til
                behandlingen. Herefter starter behandlingen. Som regel ligger du
                på briksen med tøjet på og skal blot slappe af, mens
                behandlingen foregår.                 <br />
                <br />Selve behandlingen er meget blid og
                behagelig, men den går dybt. Trykkene i Kranio-Sakral terapi er
                meget blide og rolige, så bindevævet om muskler og knogler bedre
                kan slippe, og kroppen derved kan regenere til sin naturlige
                balance – sammen med det centrale nervesystem. I Kranio- sakral
                arbejdes der med kroppens egne ressourcer og kroppen inviteres
                til et samarbejde til selvhelbredelse. En afslappende men
                samtidig meget effektiv behandling.
              </p>
            </div>
            <div className=" mb-14">
              <h1 className="mb-4 text-3xl text-center sm:text-left">Hvad er kranio- sakral terapi</h1>
              <p className="font-extralight">
                Kranio-Sakral terapi er en behandlingsform som kan påvirker
                knogler, muskler og skaber opmærksomhed på den fysiske og
                mentale stress i nervesystemet. Kranio-sakral har en regulerende
                effekt på nervesystemet. Og vores nervesystem spiller en
                afgørende rolle i alle kroppens funktioner.                 <br />
                <br />Når kroppen bliver
                mødt med nænsomhed, ro, og blide afspændende teknikker
                stimulerer dannelsen af hormonet oxytocin som er nøglen til ro
                og hvile. Det er derfor ikke blot en afslappende og behagelig
                behandling, men et vigtigt redskab til, at komme ud af kroniske
                smerter og fx stress tilstande. Ved at optimere og afbalancere
                det autonome nervesystems funktion, kan der skabes udgangspunkt
                for at ændre de livsmønstre, der belaster både fysisk og
                mentalt.
              </p>
            </div>
            <div className="mb-12 sm:mb-0">
              <h1 className="mb-4 text-3xl text-center sm:text-left">KST kan hjælpe på disse forskellige lidelser:</h1>
              <p className="font-extralight">
                Stress – rygsmerter – piskesmæld – depression – søvnbesvær –
                koncentrations- og indlæringsproblemer – hormonbalancen –
                kæbespændinger – bidfunktion – migræne og hovedpine – tinnitus –
                méniérs syndrom – svimmelhed – autisme – nakkespænding og smerte
                – kroniske muskelsmerter/spændinger – skæv hofte/forskellig
                benlængde – Iskiasproblemer – diskusprolaps.             
              </p>
            </div>
            <div></div>
          </div>
          <div className="h-auto text-white rounded-md shadow-2xl bg-default shadow-black">
            <div className="p-6 sm:p-10">
              <h1 className="text-3xl text-center">Priser</h1>
              <p className="mt-10 font-extralight">
                En behandling varer ca. 60 minutter og koster 600 kr (Weekend
                700) <br />
                <br />
                Bestilling og ændring af tid skal ske på tlf: 42531104 senest
                dagen før.
                <br />
                <br />
                Betaling kan ske kontant eller ved mobilepay på telefonnr.: 42
                53 11 04
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
                <br />
                <br />
                Se mere om hvad Kranio-sakral terapi er{" "}
                <Link href="https://kraniodanmark.dk">
                  <a className="font-bold text-blue-500 hover:text-blue-500/50">
                    her
                  </a>
                </Link>
                <br />
                <br />
                Du er altid
                velkommen til at kontakte mig for at få en uforpligtende
                samtale, hvis du gerne vil vide mere eller ikke får svar på dine
                spørgsmål her på siden.
              </p>
            </div>
          </div>
        </div>

                    <h1 className="mt-12 mb-8 text-4xl text-center font-extralight">Anmeldelser</h1>
                    <div className="grid-cols-3 gap-8 pb-8 text-white sm:grid place-items-start">
                        
                        <div className="mb-8 transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
                            <div className="m-2">
                            <div className="text-4xl italic text-left">&quot;</div>
                            <div className="mx-4 sm:mx-8">
                            <p className="text-center font-extralight">Kære James, efter behandling hos dig har jeg bare ingen smerter. En fantastisk fornemmelse i min nakke. Jeg føler jeg kan dreje hovedet hele vejen rundt ;-). Tak tak tak. <br /> <br /></p>
                            <p className="italic font-thin text-center">- Maren Andreasen</p>
                            </div>
                            <div className="h-5 text-4xl italic text-right">&quot;</div>
                            </div>
                        </div>

                        <div className="mb-8 transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
                            <div className="m-2">
                            <div className="text-4xl italic text-left">&quot;</div>
                            <div className="mx-4 sm:mx-8">
                            <p className="text-center font-extralight">Jeg bliver behandlet med Kranio-sakral terapi, på grund af en langvarig hjernerystelse (post commotionelt syndrom) og deraf følgende problemer med hovedpine, spændinger og stresstilstand i kroppen. Efter blot to behandlinger hos James, har jeg oplevet en forbedring i symptomniveau, og et generelt større velvære. Jeg oplever at behandlingen er med til at skubbe min krop (og hovedet) i den rigtige retning. KST er en yderst mild og behagelig behandlingsform, og min krop reagerer med en fantastisk ro og en enorm træthed efter behandlingen<br /> <br /></p>
                            <p className="italic font-thin text-center">- Signe Narp</p>
                            </div>
                            <div className="h-5 text-4xl italic text-right">&quot;</div>
                            </div>
                        </div>

                        <div className="transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
                            <div className="m-2">
                            <div className="text-4xl italic text-left">&quot;</div>
                            <div className="mx-4 sm:mx-8">
                            <p className="text-center font-extralight">James’ behandlinger møder min krop lige, hvor den er, hvilket for min krop betyder, at den føler sig mødt og dermed kan slippe spændingerne. Kan varmt anbefales.<br /> <br /></p>
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

export default kraniosakral;
