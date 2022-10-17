import '../styles/globals.css'


import Layout from '../comps/layout'
import  { Toaster } from 'react-hot-toast';


import Script from 'next/script'



function MyApp({ Component, pageProps }) {

  const ID = process.env.NEXT_PUBLIC_GA_ID
  console.log(ID)

  return (
<div className='bg-background scroll-smooth'>
<Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ID}');
        `}
      </Script>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    <Toaster />
 </div>
  )
}

export default MyApp
