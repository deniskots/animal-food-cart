import React, {useRef} from 'react';
import {Container} from "react-bootstrap";
import logo from '../../assets/images/logo.jpg';
import {Link, NavLink} from "react-router-dom";
import '../../styles/header.css'

const nav__links = [
    {
        display: 'Главная',
        path: '/home'
    },
    {
        display: 'Товары',
        path: '/products'
    },
    {
        display: 'Корзина',
        path: '/cart'
    },
    {
        display: 'Контакты',
        path: '/contacts'
    },
]

const Header = () => {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
    return (
        <header className='header'>
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <h5>Hot Dog</h5>
                    </div>
                    <div className="navigation" ref={menuRef}>
                        <div className="menu d-flex align-items-center gap-5">
                            {
                                nav__links.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        key={index}
                                        className={navClass => navClass.isActive ? 'active__menu' : ''}
                                        onClick={toggleMenu}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="nav__right d-flex align-items-center gap-3">
                        <span className="cart__icon">
                            <i className="ri-shopping-basket-fill"></i>
                            <span className="cart__badge">3</span>
                        </span>
                        <span className="user">
                            <Link to='/login'>
                                <i className="ri-user-3-fill"></i>
                            </Link>
                        </span>
                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
