
import Link from "next/link";
import Header from "../../comps/Header";

const message = () => {
  return (
    <div className="bg-background">
      <Header title="Krops Terapi" description="Krops Terapi"/>
      <div className="px-10 sm:px-24">

        <h1 className="text-4xl sm:text-7xl text-center font-extralight py-20 my-20 rounded-3xl bg-orange-700/20">
          Massage
        </h1>

        <div className="grid-cols-3 gap-4 sm:py-8 sm:grid">
          <div className="col-span-2 sm:mr-16">
            <div className="mb-14">
              <h1 className="mb-4 text-3xl text-center sm:text-left">Hvordan foregår en behandling?</h1>
              <p className=" font-extralight">
              Der er flere måder, hvorpå vi kan slippe af med de fysiske udfordringer, vi bærer rundt på.
<br /> <br />
Metoden, jeg bruger, afhænger af dit problem. Får du gentagne spændinger af fysisk eller psykisk belastende situationer? Hvor sidder spændingerne? Har du fået konstateret gigt/betændelse? Hvordan oplever jeg dit bindevæv? Er du muskulær stærk eller svag? Osv. Det er områder, jeg undersøger og spørger ind til. 
<br /> <br />
Jeg anvender triggerpunkt massage, fysiurgisk massage, dorn terapi og kst. Meget ofte er der flere teknikker involveret i én behandling.
<br /> <br />
Ofte får du øvelser med hjem, som er med til at speede op for — og fastholde — en god udvikling.
              </p>
            </div>

            <div></div>
          </div>
          <div className="h-auto text-white rounded-md shadow-2xl bg-default shadow-black">
            <div className="p-6 sm:p-10">
              <h1 className="text-3xl text-center">Generelt</h1>
              <p className="mt-10 font-extralight">
                <b>STED:</b> <br />
                Jeg har behandling i Helsinge og Gilleleje.
                <br /> <br />
                Helsinge – Nørretofte 20, 3200 Helsinge
                <br />
                Gilleleje - Hovedgade 19, 3250 Gilleje
                <br />
                <br />
                <b>PRIS:</b>
                <br />
                60 min: kr. 600,-
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
        
        <div className="grid-cols-3 gap-8 pb-8 text-white sm:grid place-items-start">
          <div className="mb-8 transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
            <div className="m-2">
              <div className="text-4xl italic text-left">&quot;</div>
              <div className="mx-4 sm:mx-8">
                <p className="text-center font-extralight">
                Da jeg kom til James første gang havde jeg en fastlåst nakke og smerter. Nu kan jeg bevæge nakken uden smerter. 
James arbejder holistisk og kan få bugt med mange skavanker før de udvikler sig. 
Varm anbefaling af en kompetent behandler. 
 
                  <br /> <br />
                </p>
                <p className="italic font-thin text-center">- Maria Justiniano</p>
              </div>
              <div className="h-5 text-4xl italic text-right">&quot;</div>
            </div>
          </div>

          <div className="mb-8 transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
            <div className="m-2">
              <div className="text-4xl italic text-left">&quot;</div>
              <div className="mx-4 sm:mx-8">
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
              <div className="mx-4 sm:mx-8">
                <p className="text-center font-extralight">
                  James behandlinger møder min krop lige, hvor den er, hvilket
                  for min krop betyder, at den føler sig mødt og dermed kan
                  slippe spændingerne. Kan varmt anbefales.
                  <br /> <br />
                </p>
                <p className="italic font-thin text-center">- Anette, 57 år</p>
              </div>
              <div className="h-5 text-4xl italic text-right">&quot;</div>
            </div>
          </div>
          <div className="mb-8 transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
            <div className="m-2">
              <div className="text-4xl italic text-left">&quot;</div>
              <div className="mx-4 sm:mx-8">
                <p className="text-center font-extralight">
                Jeg kontaktede James da jeg havde begyndende symptomer i krop & sind på stress. James er utrolig intuitiv og har en evne til at finde de områder hvor ens krop virkelig har brug for noget ekstra opmærksomhed via hans kropsbehandling. 
Samtidig har jeg fået forskellige øvelser som jeg arbejder med hjemme der giver mere ro i sind & krop. Kan kun på det varmeste anbefale James som behandler. 
                  <br /> <br />
                </p>
                <p className="italic font-thin text-center">- Karin Hansen</p>
              </div>
              <div className="h-5 text-4xl italic text-right">&quot;</div>
            </div>
          </div>
          <div className="transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80 sm:mt-0 mt-4">
            <div className="m-2">
              <div className="text-4xl italic text-left">&quot;</div>
              <div className="mx-4 sm:mx-8">
                <p className="text-center font-extralight">
                Jeg oplever i mine behandlinger hos James Hunt, at der er en stor ro og klarhed i hans tilgang til de problematikker som kroppen måtte have. James ER 100 procent tilstede, som en ren videreformidler af de informationer, som han mærker i kroppen. En meget forløsende kropsterapi, hvor du som klient rummes med stor omsorg.
                  <br /> <br />
                </p>
                <p className="italic font-thin text-center">-  Janne Damgaard</p>
              </div>
              <div className="h-5 text-4xl italic text-right">&quot;</div>
            </div>
          </div>
          <div className="mb-8 transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
            <div className="m-2">
              <div className="text-4xl italic text-left">&quot;</div>
              <div className="mx-4 sm:mx-8">
                <p className="text-center font-extralight">
                Jeg har haft en virkelig god oplevelse med triggerpunkts-massage hos James, og han har også lært mig hvordan jeg selv kan arbejde med triggerpunkter i kroppen. Det er muligt at behandle egne triggerpunkter, men det kan i høj grad anbefales at få James hjælp til at finde de punkter, der skaber smerter i kroppen, samt at få den dybdegående behandling af disse punkter, som man vanskeligt selv kan klare. Han er en fantastisk dygtig behandler, fordi han forstår at koble forskellige teknikker, samt at bruge samtale til at komme bagom de problematikker der er i kroppen. Det er dybt motiverende at få hans hjælp til at arbejde med sin egen krop.
                  <br /> <br />
                </p>
                <p className="italic font-thin text-center">- Signe Narp</p>
              </div>
              <div className="h-5 text-4xl italic text-right">&quot;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default message;
