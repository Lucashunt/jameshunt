import '../styles/globals.css'

import Layout from '../comps/layout'
import  { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
<div className='bg-background scroll-smooth'>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    <Toaster />
 </div>
  )
}

export default MyApp
