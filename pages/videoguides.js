import Link from "next/link.js";
import YoutubeEmbed from "../comps/YoutubeEmbed.js"

const videoGuides = () => {
    return ( 
        <div className="bg-background">
            <div className="mx-8 sm:mx-48">
              <h1 className="py-16 text-4xl tracking-wide text-center sm:text-6xl font-extralight">Videoguides</h1>
              <div className="flex flex-col items-center justify-center my-10 sm:flex-row">
              <h2 className="mb-4 mr-3 text-4xl font-thin sm:mb-0">Gå til:</h2>         
          <button className="px-5 py-3 mb-3 mr-3 transition duration-300 bg-white rounded-md shadow-2xl hover:bg-white/60 shadow-black sm:mb-0">
          <Link href="#yoga">Yoga</Link>
        </button>
        <button className="px-5 py-3 mb-3 mr-3 transition duration-300 bg-white rounded-md shadow-2xl hover:bg-white/60 shadow-black sm:mb-0">
          <Link href="#meditation">Meditation</Link>
        </button>
        <button className="px-5 py-3 mb-3 mr-3 transition duration-300 bg-white rounded-md shadow-2xl hover:bg-white/60 shadow-black sm:mb-0">
          <Link href="#relax">Afspænding</Link>
        </button>
        <button className="px-5 py-3 mb-3 mr-3 transition duration-300 bg-white rounded-md shadow-2xl hover:bg-white/60 shadow-black sm:mb-0">
          <Link href="#talks">Talks</Link>
        </button>
        </div>
            <h1 className="pb-12 text-4xl text-center sm:text-6xl font-extralight" id="yoga">YOGA</h1>

    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="UhAkj67y7tI" />
    </div>
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="WOqZhhTq_fQ" />
    </div>
        <div className="mb-10 App">
      
      <YoutubeEmbed embedId="_9E0d0qULtQ" />
    </div>
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="5Gso5YKNq2g" />
    </div>
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="QbG_cPQvIXg" />
    </div>

    <h1 className="py-12 text-4xl text-center sm:text-6xl font-extralight" id="meditation" >Meditation</h1>
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="QZUW9Uowicc" />
    </div>   
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="6KYodRvJIgI" />
    </div>    
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="18mya5MveEk" />
    </div>
    

    <h1 className="py-12 text-6xl text-center font-extralight" id="relax">Afspænding</h1>
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="vrl_xQv25J4" />
    </div>   
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="rabpFqae8VM" />
    </div>    
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="Uscw8pE0nLU" />
    </div>
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="Lv6RUgIzPrc" />
    </div>


    <h1 className="py-12 text-4xl text-center sm:text-6xl font-extralight" id="talks">Talks</h1>
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="LGMkGezm78U" />
    </div>   
    <div className="mb-10 App">
      
      <YoutubeEmbed embedId="wOBxfaIni0c" />
    </div>    
    
    
    </div>
        </div>
        
     );
}
 
export default videoGuides;