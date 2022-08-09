import Image from "next/image";
import Link from "next/link";
import headerImage from "../public/JamesSortUdenBaggrund.jpg";

const about = () => {
  return (
    <div className="bg-background">
      <div className="px-10 sm:px-24">
        <h1 className="py-16 text-4xl text-center sm:py-8 sm:text-6xl font-extralight">Om mig</h1>

        <div className="grid-cols-3 gap-4 sm:py-8 sm:grid">
          <div className="col-span-2 sm:mr-16">
            <div className="mb-14">
              <h1 className="hidden mb-4 text-3xl sm:visible">Om</h1>
              <p className=" font-extralight">
                Jeg er uddannet bygningsingeniør, men har de seneste 10 år
                uddannet mig til mindfulness, yoga instruktør, og behandler,
                samt taget mange kurser alle rettet mod, at oparbejde evnen til
                at skabe et godt liv, og være nærværende og åben overfor hvad
                livet byder på sin vej. Kort sagt være nysgerrig i “kunsten at
                leve” <br /> <br />Jeg arbejder i dag udelukkende med udvikling af trivsel
                for private og organisationer, herunder med stresshåndtering,
                terapeutisk massage, kranio-sakral terapi, søvn udredning,
                meditation og yoga.<br /> <br /> Jeg drager erfaring gennem min egen praksis,
                samt gennem de over 2000 timers undervisning jeg har givet. Min
                baggrund som ingeniør bruger jeg i dag til metodisk og
                videnskabeligt at finde ud af, hvad der virker bedst og mest
                effektivt i mit virke som underviser. <br /> <br />I 2009 blev jeg som
                ingeniør sygemeldt med stress. Det blev startskuddet til det jeg
                laver i dag. Jeg havde ingen ide om hvordan jeg kunne komme ud
                af den tilstand jeg var havnet i, hvor mange tanker kørte i højt
                tempo, og alle tanker syntes vigtige. Jeg sov næsten ikke, og
                kroppen var bare en irriterende størrelse som gav en masse
                ubehag. Gennem praksis af meditation og yoga, og en nysgerrighed
                overfor hvad som virkede godt og skidt, fik jeg ro på kroppen og
                hovedet. Langsomt men sikkert blev jeg bedre til at prioritere
                hvad der var vigtigt for mig. <br /> <br />Jeg oparbejdede en evne til at
                koncentrere mig, og være nærværende som jeg aldrig før har
                oplevet. Det brænder jeg for at give videre. <br /> <br />Du kan læse mere om
                mig og hvad jeg laver på siden her eller på <Link href="http://yoga-nord.dk"><a className="hover:text-black/50">www.yoga-nord.dk</a></Link>
              </p>
            </div>
          </div>
          <div className="">
              <Image alt="change" src={headerImage} placeholder="blur" priority />
            </div>
        </div>
      </div>
    </div>
  );
};

export default about;
