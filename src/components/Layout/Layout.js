import React from 'react';
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
import ShopCart from "../shopCart/ShopCart";

const Layout = () => {
    return (
        <div>
            <Header/>
            <ShopCart/>
            <div>
                <Routes/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
