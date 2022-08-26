import React from 'react';
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import ShopCartItem from "./ShopCartItem";
import {useSelector} from "react-redux";
import '../../styles/shopCart.css'

const ShopCart = () => {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <div className="cart__container">
            <ListGroup className="cart">
                <div className="cart__close">
          <span>
            <i className="ri-close-fill"></i>
          </span>
                </div>
                <div className="cart__item-list">
                    {cartProducts.length === 0 ? (
                        <h6 className="text-center mt-5">Извините, но товар не добавлен</h6>
                    ) : (
                        cartProducts.map((item, index) => (
                            <ShopCartItem item={item} key={index}/>
                        ))
                    )}
                </div>

                <div className="cart__bottom d-flex align-items-center justify-content-between">
                    <h6>
                        Общая сумма : <span>${totalAmount}</span>
                    </h6>
                    <button>
                        <Link to="/checkout" >
                            Checkout
                        </Link>
                    </button>
                </div>
            </ListGroup>
        </div>
    );
};
export default ShopCart;
