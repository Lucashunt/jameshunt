import '../styles/globals.css'


import Layout from '../comps/layout'
import  { Toaster } from 'react-hot-toast';


import Script from 'next/script'



function MyApp({ Component, pageProps }) {


  return (
<div className='bg-background scroll-smooth'>
<Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CCTGSSHFHL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CCTGSSHFHL');
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
