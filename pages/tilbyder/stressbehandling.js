import Image from "next/image";
import Link from "next/link";
import bro from "../../public/bro.jpeg";

const stressbehandling = () => {
  return (
    <div className="bg-background">
      <div className="px-10 sm:px-24">
        <div className="hidden sm:block">
        <Image alt="change" src={bro} placeholder="blur" priority />
        </div>
        <h1 className="py-8 text-4xl text-center sm:text-6xl font-extralight">
          Stressbehandling
        </h1>

        <div className="grid-cols-3 gap-4 py-8 sm:py-16 sm:grid">
          <div className="col-span-2 sm:mr-16">
            <div className="mb-14">
              <h1 className="mb-4 text-3xl text-center sm:text-left">Hvordan foregår en behandling?</h1>
              <p className=" font-extralight">
                Stress kan antage mange former og opleves forskelligt fra person
                til person, men fælles for alle stressede er, at det er en
                fysisk og psykisk ubalance. En ubalancen som blandt andet
                nedsætter vores livskvalitet, giver tankemylder, og mindsker
                vores evne til at koncentrere os. <br /> <br />Hver behandling er sammensat
                af en samtale og øvelser. <br /> <br /> Vi taler om, hvad der har udløst
                stress, om hvilke uvaner du måske har tillagt dig, om hvilke
                ting du kan gøre noget ved og hvilke du ikke kan. Du får viden
                om stress og om, hvordan du kan håndtere stress i din hverdag.<br /> <br />
                Vi laver øvelser som nedsætter dit stressniveau her og nu, og
                som på sigt virker mere som en permanent stresshåndtering.
                Øvelserne gives som hjemmearbejde.
              </p>
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
                Jeg har behandling i Helsinge og Smidsstrup.
                <br />
                Helsinge – Nørretofte 20, 3200 Helsinge
                <br />
                Smidsstrup – Digeshøj 7A, 3250 Gilleje (privat)
                <br />
                <br />
                <b>PRIS:</b>
                <br />
                500 kr/time. Første gang anbefaler jeg 1½ time
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

export default stressbehandling;
