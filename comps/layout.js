import Footer from "./footer";
import Navbars from "./navbar";

const Layout = ( { children }) => {
    return ( 
        <div>
            <Navbars />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;