
import Image from "next/image";
import Link from "next/link";
import Header from "../comps/Header";
import headerImage from "../public/JamesSortUdenBaggrund.jpg";


export default function Home() {
  return (
    <div className=" bg-background">
      {/* Header sektion */}
    <Header title="Forside" description="Frontpage"/>

      <div className="px-10 py-6 sm:py-12 sm:px-24">
        <div className="">
          <div className="flex flex-col grid-cols-2 gap-12 sm:grid">
            <div className="flex flex-col justify-center text-3xl leading-tight text-center sm:ml-10 sm:text-5xl font-extralight sm:text-left">
              Et problem kan ikke beskrives og løses med den tænkning, der har
              skabt det{" "}
              <span className="mt-4 text-2xl italic font-thin sm:text-2xl">- Albert Einstein</span>
            </div>
            <div className="order-first sm:order-last">
              <Image alt="change" src={headerImage} placeholder="blur" priority />
            </div>
          </div>
        </div>
      </div>

      {/* Citat sektion */}

      <div className="px-10 bg-white sm:grid-cols-4 sm:grid">
        <div></div>
        <div className="col-span-2">
          <div className="flex items-center text-4xl leading-tight text-center sm:text-5xl h-80 font-extralight">
            <h1>
              <span className="">
                Opmærksomhed
              </span>
              ,{" "}
              <span className="">
                udholdenhed
              </span>{" "}
              og{" "}
              <span className="">
                balance
              </span>{" "}
              i livet
            </h1>
          </div>
        </div>
        <div></div>
      </div>

      {/* 3 grid med de forskellige */}

      <div className="mx-10 my-16 sm:mx-20 sm:my-40">

        <div className="grid gap-20 sm:grid-cols-3 sm:grid ">
        <div className="sm:mb-0">
        <h3 className="text-4xl text-center font-extralight py-20 bg-gray-400/20 rounded-3xl ">Hold</h3>

            <p className=" text-center font-extralight mt-4">
              Mine hold og priser
            </p>
            <div className="flex justify-center">
            <Link href="/tilbyder/hold">
              <button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
                <a>Læs mere</a>
              </button></Link>
            </div>
          </div>
          <div className="sm:mb-0">
          <h3 className="text-4xl text-center font-extralight py-20 bg-sky-300/20 rounded-3xl ">Krops Terapi</h3>

            <p className="mt-4 text-center sm:mx-10 font-extralight">
              En helhedsorienteret måde at arbejde med krop og psyke på
            </p>
            <div className="flex justify-center">
            <Link href="/tilbyder/kropsterapi">
              <button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
                <a>Læs mere</a>
              </button></Link>
            </div>
          </div>
          <div className="sm:mb-0">
          <h3 className="text-4xl text-center font-extralight py-20 bg-red-300/20 rounded-3xl ">Kranio-Sakral Terapi</h3>

            <p className="mt-4 text-center sm:mx-10 font-extralight">
              Det blide tryg med den store virkning
            </p>
            <div className="flex justify-center">
            <Link href="/tilbyder/kraniosakral">
              <button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
                <a>Læs mere</a>
              </button></Link>
            </div>
          </div>
          <div className="">
          <h3 className="text-4xl text-center font-extralight py-20 bg-yellow-300/20 rounded-3xl ">Begivenheder</h3>

            <p className="mt-4 text-center sm:mx-10 font-extralight">
              Workshops, retreats mm. 
            </p>
            <div className="flex justify-center">
            <Link href="/tilbyder/begivenheder"><button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
               <a>Læs mere</a>
              </button></Link>
            </div>
          </div>

          <div className="">
          <h3 className="text-4xl text-center font-extralight py-20 bg-orange-300/20 rounded-3xl">Stressbehandling</h3>

            <p className="mt-4 text-center sm:mx-10 font-extralight">
              Lær at forstå din stress
            </p>
            <div className="flex justify-center">
            <Link href="/tilbyder/stressbehandling">
              <button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
                <a>Læs mere</a>
              </button></Link>
            </div>
          </div>
          <div className="">
          <h3 className="text-4xl text-center font-extralight py-20 bg-emerald-400/20 rounded-3xl ">Søvn</h3>

            <p className="mt-4 text-center sm:mx-10 font-extralight">
              Søvnbehandling 
            </p>
            <div className="flex justify-center">
            <Link href="/tilbyder/sleep"><button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
               <a>Læs mere</a>
              </button></Link>
            </div>
          </div>

        </div>
      </div>

      {/* Facebook del */}

      <div className="flex items-center justify-around sm:justify-center bg-white h-80">
        <h1 className="text-4xl text-center sm:text-5xl sm:mr-6 font-extralight hover:text-black/50">
          <Link href="https://www.facebook.com/yoganord.dk">
            <a>Find mig på facebook</a>
          </Link>
        </h1>
        <Link href="https://www.facebook.com/yoganord.dk">
          <svg
            className="fill-blue-500 hover:fill-blue-500/50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="96px"
            height="96px"
          >
            <path d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            />
          </svg>
        </Link>
      </div>

      {/* Kontakt sektion */}

      <div className="flex flex-col items-center justify-center h-96 font-extralight">
        <h1 className="text-4xl sm:text-5xl">Skriv til mig</h1>
        <Link href="/kontakt" passHref>
        <button className="px-5 py-3 mt-12 text-white transition duration-300 rounded-md bg-default hover:bg-default/60">
          <a>Kontakt mig</a>
        </button></Link>
      </div>
    </div>
  );
}
