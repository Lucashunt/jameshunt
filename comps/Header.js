import Head from "next/head";

const Header = ({title, description}) => {
    return ( 
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#F8F6F1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
     );
}
 
export default Header;