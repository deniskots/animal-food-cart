import React from 'react';
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
import ShopCart from "../shopCart/ShopCart";
import {useSelector} from "react-redux";

const Layout = () => {
    const showCart = useSelector((state) => state.shopCart.cartIsVisible)
    return (
        <div>
            <Header/>
            {showCart && <ShopCart/>}
            <div>
                <Routes/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
