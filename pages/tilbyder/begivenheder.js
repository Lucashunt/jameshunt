import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Header from "../../comps/Header";

function Dis({ p }) {
  return (
    <div className="w-full py-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span className="text-xl">Læs mere</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 font-extralight">
                {p}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

function Generelt({ pris, dato, tid, adresse, tilmelding, overskrift, p }) {
  return (
    <div>
      <h2 className="mb-4 text-3xl text-center sm:text-left">{overskrift}</h2>

      <Dis p={p} />
      <div className="grid grid-cols-2 my-4 gap-6 ml-4">

      <div>
          <h3 className="text-2xl">Adresse</h3>
          <p className="font-extralight">{adresse}</p>
        </div>

        <div>
          <h3 className=" text-2xl">Pris</h3>
          <p className="font-extralight">{pris},-</p>
        </div>

        <div>
          <h3 className="text-2xl">Dato</h3>
          <p className="font-extralight">{dato}</p>
        </div>

        <div>
          <h3 className="text-2xl">Tid</h3>
          <p className="font-extralight">{tid}</p>
        </div>

        <div>
          <h3 className="text-2xl">Kontakt</h3>
          <p className="font-extralight">
            Mobil: 42 53 11 04 <br />
            Email: james@yoga-nord.dk
          </p>
        </div>

        <div>
          <h3 className="text-2xl">Tilmelding</h3>
          <p className="font-extralight">{tilmelding}</p>
        </div>
      </div>
    </div>
  );
}

const Begivenheder = () => {
    
  return (
    <div className="bg-background">
        <Header title="Begivenheder" description="Events page"/>
      <div className="px-10 sm:px-24">
      <h1 className="text-4xl text-center font-extralight py-20 my-20  rounded-3xl  bg-yellow-300/20">
          Begivenheder
        </h1>
        <div className="grid sm:grid-cols-3 gap-20">


          <Generelt
            pris="295"
            dato="Torsdag d. 29 December"
            tid="Kl. 10 - 12:30"
            adresse="Nørretoftevej 20, 3200 Helsinge"
            tilmelding="Du er tilmeldt når du har bekræftet din deltagelse på Facebook, sms eller mail, og indbetalt til mobilepay nr.: 42 53 11 04. Mærk betaling med dato for workshoppen"
            overskrift="En stille dag Helsinge"
            p={<p>2,5 timers Yin og Dynamic yoga. Der vil være fokus på at trække tempoet ud, invitere langsomheden ind og være i stilhed. Øvelserne vil fordrer at kroppen detoxer - både fysisk og mentalt. <br /><br />Denne workshop indeholder en mere meditativ yogaform, med fordybelsen i yogaens dybere stillinger og åndedrætstræning.<br /><br />Dynamic yoga er en yogaform, der har fokus på mindfulness og fordybelse gennem blide flow.<br /><br />Yin yoga er en blid og meditativ træning, der lader kroppen komme ind i en dyb oplevelse af afslapning og ro. Med ro i krop og sind skaber du restitution, større bevægelsesfrihed og du bliver opmærksom. Du bliver guidet ind i stillingerne med fokus på åndedrættet, stillingerne i Yin holdes afslappet i 3-5 min, hvor du opnår dybe og rolige stræk, der både smidiggør muskler, led og bindevæv.<br /><br />Du får mulighed for at vende blikket indad for en stund og være i stilhed, både fysisk og mentalt.</p>}
          />
                    <Generelt
            pris="295"
            dato="Torsdag d. 30 December"
            tid="Kl. 10 - 12:30"
            adresse="Hovedgade 19, 3250 Gilleje"
            tilmelding="Du er tilmeldt når du har bekræftet din deltagelse på Facebook, sms eller mail, og indbetalt til mobilepay nr.: 42 53 11 04. Mærk betaling med dato for workshoppen"
            overskrift="En stille dag Gilleleje"
            p={<p>2,5 timers Yin og Dynamic yoga. Der vil være fokus på at trække tempoet ud, invitere langsomheden ind og være i stilhed. Øvelserne vil fordrer at kroppen detoxer - både fysisk og mentalt. <br /><br />Denne workshop indeholder en mere meditativ yogaform, med fordybelsen i yogaens dybere stillinger og åndedrætstræning.<br /><br />Dynamic yoga er en yogaform, der har fokus på mindfulness og fordybelse gennem blide flow.<br /><br />Yin yoga er en blid og meditativ træning, der lader kroppen komme ind i en dyb oplevelse af afslapning og ro. Med ro i krop og sind skaber du restitution, større bevægelsesfrihed og du bliver opmærksom. Du bliver guidet ind i stillingerne med fokus på åndedrættet, stillingerne i Yin holdes afslappet i 3-5 min, hvor du opnår dybe og rolige stræk, der både smidiggør muskler, led og bindevæv.<br /><br />Du får mulighed for at vende blikket indad for en stund og være i stilhed, både fysisk og mentalt.</p>}
          />

          <Generelt
            pris="575"
            dato="Afventer"
            tid="Afventer"
            adresse="Nørretoftevej 20, 3200 Helsinge"
            tilmelding="Du er tilmeldt når du har bekræftet din deltagelse på Facebook, sms eller mail, og indbetalt til mobilepay nr.: 42 53 11 04. Mærk betaling med dato for workshoppen"
            overskrift="En kold tyrker"
            p={<p>Er du hele tiden på jagt efter det næste fix? Har du hele tiden behov for anerkendelse. Føler du et
                konstant behov for, at tjekke ind på de sociale medier. Fylder mad og drikke meget i din bevidsthed,
                eller har du bare lyst til at arbejde 24/7.
                Driften får os frem, sørger for at vi står op om morgenen, og får os til at handle, spise ect. Den del af
                vores hjerne hvor vores drift tager sit udgangspunkt, hedder hypothalamus. Den sørger for, at
                balancere vores krop og hjerne via hormoner, det autonome nervesystem og drifter.
                <br /> <br />
                &quot;PETER LUND MADSEN KALDER HYPOTHALAMUS FOR “DEN STØRSTE TRUSSEL MOD DET MODERNE
                MENNESKE&quot;
                <br /> <br />
                Det er således en god tjener, men en dårlig herre, da den ved ubalance meget nemt giver os en
følelse af, at noget styre os. Konstant vil hypothalamus belønnes med arbejde, mad, drikke, hård
sport, medier ect. Hele tiden skal vi handle for, at stille hypothalamus tilfreds. Uden disciplin er vi i
hænderne på denne gamle del af vores hjerne.
<br /> <br />
På denne workshop arbejder vi i 6 timer på, at &quot;nulstille&quot; denne del af vores hjerne. Vi tager den
nyeste og mest udviklede del af vores hjerne i brug. Den præfrontale cortex. Her sidder vores
fornuft og empati. Her sidder evnen til, at gøre noget vi måske ikke lige har lyst til, men som på den
lange bane gør os godt.
<br /> <br />
Vi giver gennem øvelser, os en pause fra ydre distraktioner, og plads til indre støj. Og får ofte en
 fornemmelse af, at blive &quot;nulstillet&quot; og igen blive herre i eget hus.
 <br /> <br />
 &quot;Det kræver en kold tyrker, at komme hjem&quot; 
 
                </p>}
          />
                    <Generelt
            pris="295"
            dato="Afventer"
            tid="Kl. 10 - 12:30"
            adresse="Nørretoftevej 20, 3200 Helsinge"
            tilmelding="Du er tilmeldt når du har bekræftet din deltagelse på Facebook, sms eller mail, og indbetalt til mobilepay nr.: 42 53 11 04. Mærk betaling med dato for workshoppen"
            overskrift="Skuldre, nakke, yin og blide bevægelser"
            p={<p>På denne workshop arbejder vi med skuldre og nakke. Stress har tendens til at sætte sig i de områder med spændinger, til tider hovedpine, en følelse af træthed og svimmelhed som resultat af spændingerne. Gennem ásanas (stillinger) og åndedræt vil vi få løsnet op i muskler og sener og få skabt øget velvære. <br /><br /> Du vil få værktøjer til selv at arbejde med disse områder derhjemme.<br /><br />Workshoppen afsluttes med &quot;Yin og blide bevægelser&quot; er en yogaform, hvis sigte er at skabe balance gennem lige dele aktiv og passiv, blid og nærværende træning.<br /><br />Yin yoga er en blid og meditativ træning, der lader kroppen komme ind i en dyb oplevelse af afslapning og ro. Med ro i krop og sind skaber du restitution, større bevægelsesfrihed, og du bliver opmærksom. Du bliver guidet ind i stillingerne med fokus på åndedrættet, og stillingerne holdes afslappet i 3-5 min, hvor du opnår dybe og rolige stræk, der både smidiggør muskler, led og bindevæv.<br /><br />De blide bevægelser aktiverer musklerne, styrker din krop og hjælper til at skabe en balance mellem det passive og aktive.</p>}
          />

<Generelt
            pris="Se pdf"
            dato="D. 15 - 17 September"
            tid="Start Kl. 15"
            adresse="Rytsebækvej 17, 4780 Stege"
            tilmelding="Du er tilmeldt når du har bekræftet din deltagelse på Facebook, sms eller mail, og indbetalt til mobilepay nr.: 42 53 11 04. Mærk betaling med dato for workshoppen"
            overskrift="Weekend retreat"
            p="se pdf"
          />

        </div>
      </div>
    </div>
  );
};

export default Begivenheder;
