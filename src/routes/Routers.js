import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contacts from "../pages/Contacts";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<AllProducts/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    );
};

export default Routers;
