import Image from "next/image";
import Link from "next/link";
import Kranio from "../../public/Kranio.jpeg";

const Hold = () => {
  return (
    <div className="bg-background">
      <div className="px-10 sm:px-24">
        <div className="hidden sm:block">
          <Image alt="change" src={Kranio} placeholder="blur" priority />
        </div>
        <h1 className="py-16 text-4xl text-center sm:py-8 sm:text-6xl font-extralight">
          Mine hold
        </h1>
        <h2 className="text-4xl font-extralight sm:pt-16 mb-6 underline decoration-1 underline-offset-2">
          Hold
        </h2>
        <div className="grid sm:grid-cols-3 sm:my-16 gap-10">
          <div className="col-span-1 flex flex-col items-center sm:items-start">
            <div>
              <h3 className="text-center sm:text-left text-3xl ">Mandag</h3>
              <ul className="font-extralight mt-4">
                <li>Tid: kl 9.00-10:30</li>
                <li>Underviser: James Hunt, Mobil 42531104</li>
                <li>Form: Yin og blide bevægelser</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div>
              <h3 className="text-center sm:text-left text-3xl ">Tirsdag</h3>
              <ul className="font-extralight mt-4">
                <li>Tid: kl 9.30-11:00</li>
                <li>Underviser: James Hunt, Mobil 42531104</li>
                <li>Form: Yin og blide bevægelser</li>
              </ul>
              <ul className="font-extralight mt-4">
                <li>Tid: kl 19:00-20:30</li>
                <li>Underviser: James Hunt, Mobil 42531104</li>
                <li>Form: Yin og blide bevægelser</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 flex flex-col  items-center sm:items-end">
            <div>
              <h3 className="text-center sm:text-left text-3xl">Torsdag</h3>
              <ul className="font-extralight mt-4">
                <li>Tid: kl 10.00-10:30</li>
                <li>Underviser: James Hunt, Mobil 42531104</li>
                <li>Form: Yin og blide bevægelser</li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-extralight sm:pt-16 underline decoration-1 underline-offset-2 mb-6 pt-32">
          Beskrivelse
        </h2>
        <div className="grid sm:grid-cols-3 sm:mt-16 gap-10">
          <div className="col-span-1 flex flex-col items-center">
            <div>
              <h3 className="text-center sm:text-left text-3xl ">
                Yin og blide bevægelser
              </h3>
              <p className="font-extralight mt-4">
                Yin og blide bevægelser er en yogaform, hvis sigte er at skabe
                balance gennem lige dele aktiv og passiv, blid og nærværende
                træning. Yin yoga er en blid og meditativ træning, der lader
                kroppen komme ind i en dyb oplevelse af afslapning og ro. Med ro
                i krop og sind skaber du restitution, større bevægelsesfrihed,
                og du bliver opmærksom. Du bliver guidet ind i stillingerne med
                fokus på åndedrættet, og stillingerne holdes afslappet i 3-5
                min, hvor du opnår dybe og rolige stræk, der både smidiggør
                muskler, led og bindevæv. De blide bevægelser aktiverer
                musklerne, styrker din krop og hjælper til at skabe en balance
                mellem det passive og aktive. Alle lektioner har fokus på ryggen
                som basis.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div>
              <h3 className="text-center sm:text-left text-3xl">Hatha Yoga</h3>
              <p className="font-extralight mt-4">
                I mindful Hatha kombinere vi de styrkende øvelser, med lange
                stræk og blide bevægelser. Det udadvendte aktive, med det
                indadvendte passive. Dybest set betyder Hatha balance. I alle
                stillingerne, arbejder vi med et bevidst nærvær og åndedræt.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div>
              <h3 className="text-center sm:text-left text-3xl ">
                Mindful blid yoga
              </h3>
              <p className="font-extralight mt-4">
                Mindful yoga er en blid yogastil. Jeg tager udgangspunkt i den
                traditionelle Hatha yoga, men min undervisning bærer også præg
                af nyere retninger såsom restorativ- og yin yoga. Jeg lægger
                meget vægt på opmærksomhed på åndedræt, og tilstedeværelse i
                øvelserne. Vi smidiggører kroppen, og slipper spændinger fysiske
                som psykiske. Er særdeles velegnet ved fysiske udfordringer og
                gamle skader ved bækkenbund, ryg, skuldre og nakke, samt alle
                stress tilstande. Kontakt mig endelig ved spørgsmål.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:mt-20 mt-10">
          <div className="h-auto text-white rounded-md shadow-2xl bg-default shadow-black my-10 sm:w-1/2">
            <div className="p-6 sm:p-10">
              <h1 className="text-3xl text-center mb-10">Priser</h1>
              <h3>Sæsontilmelding 2022</h3>
              <p className="font-extralight mt-2">
                Ved sæson tilmelding koster det 110 kr pr gang ved samlet
                betaling.
              </p>
              <h3 className="mt-10">Start efter sæsonstart</h3>
              <p className="font-extralight mt-2">
                Starter du inde i sæsonen betaler du for de resterende uger. Er
                det en udfordring for dig, at betale for sæsonen på én gang,
                finder vi ud af en løsning <br />
                Når du er tilmeldt èt hold, kan du altid skifte hold hvis du en
                uge ikke kan gå på dit faste. (forudsat der er plads)
              </p>
              <h3 className="mt-10"> Klippekort</h3>
              <p className="font-extralight mt-2">
                Klippekort med 10 gange yoga koster 1400 kr
              </p>
              <h3 className="mt-10">Betaling ved fremmøde</h3>
              <p className="font-extralight mt-2">Drop in koster det 150 kr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hold;
