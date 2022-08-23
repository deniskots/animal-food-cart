import React from 'react';
import {Container} from "react-bootstrap";
import logo from '../../assets/images/logo.jpg';
import {Link, NavLink} from "react-router-dom";
import '../../styles/header.css'

const nav__links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Products',
        path: '/products'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contacts',
        path: '/contacts'
    },
]

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <h5>Hot Dog</h5>
                    </div>
                    <div className="navigation">
                        <div className="menu d-flex align-items-center gap-5">
                            {
                                nav__links.map((item, index) => (
                                    <NavLink to={item.path} key={index}>{item.display}</NavLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="nav__right d-flex align-items-center gap-3">
                        <span className="cart__icon">
                            <i className="ri-shopping-basket-fill"></i>
                            <span className="cart__badge"></span>
                        </span>
                        <span className="user">
                            <Link to='/login'><i className="ri-user-3-fill"></i></Link>
                        </span>
                        <span className="mobile__menu">
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
