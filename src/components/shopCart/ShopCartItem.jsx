import React from 'react';
import {useDispatch} from "react-redux";
import {ListGroup} from "react-bootstrap";
import '../../styles/shopCartItem.css'

const ShopCartItem = ({item}) => {
    const { id, title, price, image01, quantity, totalPrice } = item;
    const dispatch = useDispatch();
    return (
        <ListGroup.Item className="border-0 cart__item">
            <div className="cart__item-info d-flex gap-2">
                <img src={image01} alt="product-img" />

                <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                    <div>
                        <h6 className="cart__product-title">{title}</h6>
                        <p className=" d-flex align-items-center gap-5 cart__product-price">
                            {quantity}x <span>${totalPrice}</span>
                        </p>
                        <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn">
                <i class="ri-add-line"></i>
              </span>
                            <span className="quantity">{quantity}</span>
                            <span className="decrease__btn" >
                <i class="ri-subtract-line"></i>
              </span>
                        </div>
                    </div>

                    <span className="delete__btn" >
            <i class="ri-close-line"></i>
          </span>
                </div>
            </div>
        </ListGroup.Item>
    );
};

export default ShopCartItem;
