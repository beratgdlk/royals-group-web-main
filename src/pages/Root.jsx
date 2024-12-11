import { Outlet } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import AltFooter from "../components/AltFooter";
import '../css/style.scss'


function RootLayout() {

    return (
        <>
            <NavbarComp />
            <Outlet />
            <Footer />
            <AltFooter />
        </>
    )
}

export default RootLayout;