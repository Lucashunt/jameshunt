import Image from "next/image";
import Link from "next/link";
import skov from "../../public/skov.jpeg";

const sleep = () => {
  return (
    <div className="bg-background">
      <div className="px-10 sm:px-24">
        <div className="hidden sm:block">
        <Image alt="change" src={skov} placeholder="blur" priority />
        </div>
        <h1 className="py-16 text-4xl text-center sm:py-8 sm:text-6xl font-extralight">Søvn</h1>

        <div className="grid-cols-3 gap-4 sm:grid sm:py-8">
          <div className="col-span-2 sm:mr-16">
            <div className="mb-14">
              <h1 className="mb-4 text-3xl text-center sm:text-left">Hvordan foregår et søvn forløb?</h1>
              <p className=" font-extralight">
                <b>Søvnproblemer</b> (insomni) skyldes i langt de fleste
                tilfælde flere faktorer. <br /> <br />
                <b>Fysiologiske ubalancer</b> som ofte er skabt af lang tids
                overbelastning. Vores nervesystem er kommet i ubalance. Når vi
                skal sove er den “forkerte” del af nervesystemet, det sympatiske
                nervesystem, overaktivt.
                <br /> <br /> <b>Dårlige søvnvaner.</b> <br /> <br />{" "}
                <b>Psykologiske ubalancer</b> kommer til udtryk, når søvnen
                bliver taget fra os. Vi bliver opmærksomme på, hvor vigtig
                søvnen er for vores trivsel, og reagerer uhensigtsmæssigt. I
                stedet for at slappe af når vi ikke kan sove, reagere vi med
                ængstelse og irritation, og forværrer derved situationen.
              </p>
            </div>
            <div className="">
              <h1 className="mb-4 text-2xl text-center sm:text-left">
                På dette forløb arbejder vi med?
              </h1>
              
              <ul className="ml-4 list-disc list-outside sm:ml-8 font-extralight">
                <li> Etablering af gode søvnvaner.</li>
                <li> Afspændingsteknikker, herunder “det bevidste åndedræt”</li>
                <li>
                  Den mentale tilgang til søvnen. Identificering af sammenhænge
                  mellem tanker, følelser og adfærd.{" "}
                </li>
                <li> Kostens betydning for søvnen. </li>
              </ul>
              <p className=" font-extralight">
                <br />
                <b>Min</b> tilgang og metode tager udgangspunkt i den
                videnskablige forskning på området, samt de erfaringer jeg har
                gjort mig, da jeg igennem en årrække led under svær insomni.
              </p>
              <div className="flex justify-center mt-7">
              <div className="mb-10 text-white transition duration-300 rounded-md shadow-2xl shadow-black bg-default hover:bg-default/80 sm:mb-0">
                            <div className="m-2">
                            <div className="text-4xl italic text-left">&quot;</div>
                            <div className="mx-4 sm:mx-8">
                            <p className="text-center font-extralight">Søvn, søvn, forfærdelige opfindelse, forfærdelige nødvendighed, <br /> du eneste magt, som jeg frygter<br /> <br /></p>
                            <p className="italic font-thin text-center">- Søren Kirkegaard</p>
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
                <b>FORLØB:</b> <br />
                Forløbet aftales og tilpasses i samarbejde med dig. Under
                forløbet er det muligt at kontakte mig telefonisk <br /> <br />
                <b>STED:</b> <br />
                Helsinge – Nørretofte 20, 3200 Helsinge
                <br />
                Smidsstrup – Digeshøj 7A, 3250 Gilleje (privat)
                <br />
                <br />
                <b>PRIS:</b>
                <br />
                650 kr/time.
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

export default sleep;
