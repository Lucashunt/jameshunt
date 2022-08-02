import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import headerImage from "../public/JamesSortUdenBaggrund.jpg";
import gridImgOne from "../public/meditation2.jpeg";
import gridImgTwo from "../public/skovVand2.jpg";
import gridImgThree from "../public/udendørsYoga2.jpg";

export default function Home() {
  return (
    <div className=" bg-background">
      {/* Header sektion */}

      <div className="px-24 py-12">
        <div className="">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col justify-center ml-10 text-5xl leading-tight font-extralight">
              Et problem kan ikke beskrives og løses med den tænkning, der har
              skabt det{" "}
              <span className="mt-4 italic font-thin">- Albert Einstein</span>
            </div>
            <div className="">
              <Image alt="change" src={headerImage} placeholder="blur" priority />
            </div>
          </div>
        </div>
      </div>

      {/* Citat sektion */}

      <div className="grid grid-cols-4 bg-white">
        <div></div>
        <div className="col-span-2">
          <div className="flex items-center text-5xl leading-tight text-center h-80 font-extralight">
            <h1>
              <span className="underline underline-offset-2 decoration-2">
                Opmærksomhed
              </span>
              ,{" "}
              <span className="underline underline-offset-2 decoration-2">
                udholdenhed
              </span>{" "}
              og{" "}
              <span className="underline underline-offset-2 decoration-2">
                balance
              </span>{" "}
              i livet
            </h1>
          </div>
        </div>
        <div></div>
      </div>

      {/* 3 grid med de forskellige */}

      <div className="mx-20 my-40">

        <div className="grid grid-cols-3 gap-8 ">
          <div className="">
            <h1 className="mb-4 text-3xl text-center font-extralight">
              Kraniosakral Terapi
            </h1>
            <Image alt="change" src={gridImgOne} placeholder="blur" />
            <p className="mx-10 mt-2 text-center font-extralight">
              Det blide tryg med den store virkning
            </p>
            <div className="flex justify-center">
              <button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
                <Link href="/">Læs mere</Link>
              </button>
            </div>
          </div>
          <div className="">
            <h1 className="mb-4 text-3xl text-center font-extralight">
              Krops Terapi
            </h1>
            <Image alt="change" src={gridImgTwo} placeholder="blur" />
            <p className="mx-10 mt-2 text-center font-extralight">
              En helhedsorienteret måde at arbejde med krop og psyke på
            </p>
            <div className="flex justify-center">
              <button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
                <Link href="/">Læs mere</Link>
              </button>
            </div>
          </div>
          <div className="">
            <h1 className="mb-4 text-3xl text-center font-extralight">
              Yoga & meditation
            </h1>
            <Image alt="change" src={gridImgThree} placeholder="blur" />
            <p className="mx-10 mt-2 text-center font-extralight">
              Yoga, meditationer og afspændinger
            </p>
            <div className="flex justify-center">
              <button className="px-4 py-2 mt-3 text-white transition duration-300 rounded-md bg-default hover:bg-default/60 font-extralight">
                <Link href="/">Læs mere</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Evt facebook del */}

      <div className="flex items-center justify-center bg-white h-80">
        <h1 className="mr-6 text-5xl font-extralight hover:text-black/50">
          <Link href="https://www.facebook.com/Jameshunt.dk">
            Find mig på facebook
          </Link>
        </h1>
        <Link href="https://www.facebook.com/Jameshunt.dk">
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
        <h1 className="text-5xl ">Skriv endelig til mig</h1>
        <button className="px-5 py-3 mt-12 text-white transition duration-300 rounded-md bg-default hover:bg-default/60">
          <Link href="/">Kontakt mig</Link>
        </button>
      </div>
    </div>
  );
}
