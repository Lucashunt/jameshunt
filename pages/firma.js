
import Link from "next/link";
import Header from "../comps/Header";


const firma = () => {
  return (
    <div className="bg-background">

      <Header title="Firma" description="Company page"/>
      <div className="px-10 sm:px-24">

      <h1 className="text-4xl text-center font-extralight py-20 my-20  rounded-3xl  bg-blue-300/20">
          Opmærksomhed, udholdenhed og balance i livet
        </h1>

        <div className="grid-cols-3 gap-4 sm:py-8 sm:grid">
          <div className="col-span-2 sm:mr-16">
            <div className="mb-14">
              <h1 className="mb-4 text-3xl text-center sm:text-left">Stresshåndtering</h1>
              <p className=" font-extralight">
                <b>Stresshåndtering</b> er blevet en nødvendig del af den
                enkelte og firmaers platform for et godt arbejdsliv. Det
                diskuteres jævnligt i medierne, hvorvidt det er medarbejderen
                eller firmaets ansvar, at den enkelte trives og ikke bukker
                under for stress. Sandheden er vel, at det både er virksomheden
                og den enkeltes ansvar at skabe gode rammer for et godt
                arbejdsliv. Dette er mit udgangspunkt, når jeg arbejder sammen
                med firmaer om at skabe mere arbejdsglæde og mindre stress. Jeg
                er uddannet ingeniør, men lever i dag af, at tilbyde private og
                firmaer stresshåndteringsstrategier.
                <br />
                <br />
                Min baggrund som <b>ingeniør</b>
                bruger jeg i dag til metodisk og videnskabeligt at finde ud af,
                hvad der virker bedst og mest effektivt, i mit virke som
                underviser.
              </p>
            </div>
            <div className="mb-14">
              <h1 className="mb-4 text-2xl text-center sm:text-left">
                Emner som typisk vil blive gennemgået er:
              </h1>
              <p className=" font-extralight">
                Stresshåndtering. Hvordan træner vi vores nærvær, og hvorfor
                bruge tid på det? Hvordan defineres effektivitet? Hjernen og
                hvordan den reagerer i forskellige situationer. Hvordan vi kan
                bruge åndedrættet, som den måske nemmeste adgang til livsglæde
                og koncentration. Ydermere tilbyder jeg strategier for
                håndtering af sygemeldinger forårsaget af stress, og indput til{" "}
                <b>bæredygtig ledelse.</b>
              </p>
            </div>
            <div className="">
              <h1 className="mb-4 text-2xl text-center sm:text-left">
                Jeg forventer følgende resultater af et forløb med jer:
              </h1>

              <ul className="ml-8 list-disc list-outside font-extralight">
                <li> Bedre koncentration</li>
                <li> Bedre evne til at prioritere</li>
                <li>Bedre sammenhold og forståelse for hinanden </li>
                <li> Bedre selvværd hos den enkelte (trivsel og velvære)</li>
                <li>Bedre resultater</li>
              </ul>
              <div className="flex justify-center mb-12 mt-7 sm:mb-0">
                <div className="text-white transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80">
                  <div className="m-2">
                    <div className="text-4xl italic text-left">&quot;</div>
                    <div className="mx-4 sm:mx-8">
                      <p className="text-center font-extralight">
                        HVAD ENTEN I ØNSKER EN INTRODUKTION TIL ET TEAM-, LEDER-
                        ELLER FYRAFTENSMØDE, EN WORKSHOP ELLER ET FORLØB, KAN
                        DET SKRÆDDERSYES JERES BEHOV MED MULIGHED FOR AT
                        EVALUERE EFFEKTEN EFTERFØLGENDE
                        <br /> <br />
                      </p>
                    </div>
                    <div className="h-5 text-4xl italic text-right">&quot;</div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
          <div className="h-auto text-white rounded-md shadow-2xl bg-default shadow-black">
            <div className="p-6 sm:p-10">
              <h1 className="text-3xl text-center">Generelt</h1>
              <p className="mt-10 font-extralight">
                <b>KONTAKT:</b>
                <br />
                James@Jameshunt.dk eller james@yoga-nord.dk, mobil: 42 53 11 04
                <br />
                <br />
                <button className="px-5 py-3 transition duration-300 bg-white rounded-md text-default hover:bg-white/60">
                  <a href="https://docdro.id/c55zdya" target="_blank" download rel="noreferrer">
                                        DOWNLOAD FOREDRAG BROCHURE “STRESSHÅNDTERING I PRAKSIS HER
                    (PDF)
                  </a>
                </button>
                <button className="px-5 py-3 mt-6 transition duration-300 bg-white rounded-md text-default hover:bg-white/60">
                  <a href="https://docdro.id/TSvHZBN" target="_blank" download rel="noreferrer">
                  DOWNLOAD FIRMA BROCHURE HER (PDF) 
                  </a>
                </button>
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
      </div>
    </div>
  );
};

export default firma;
