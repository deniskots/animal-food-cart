import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from '../../redux/slices/cartSlice'

import '../../styles/product-cart.css';


const ProductCard = (props) => {
    const {title, price, image01, id} = props.item;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem(id, title, image01, price))
    }

    return (
        <div className="product__item">
            <div className="product__img ">
                <img src={image01} alt="product-img"/>
            </div>

            <div className="product__content">
                <h5>
                    <Link to={`/products/${id}`}>{title}</Link>
                </h5>
                <div className=" d-flex align-items-center justify-content-between ">
                    <span className="product__price">${price}</span>
                    <button onClick={addToCart} className="addCart__btn">
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;