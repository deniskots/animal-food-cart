import React from 'react';
import CommonSection from "../components/common-section/CommonSection";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import '../styles/cartPage.css';
import '../styles/product-cart.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../redux/slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <div>
            <div className='comm-sec'>
                <CommonSection title='Корзина'/>
            </div>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {
                                cartItems.length === 0
                                    ? <h1 className='text-center'> Вы ничего не выбрали</h1>
                                    : <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th className='text-center'>Изображение</th>
                                            <th className='text-center'>Название</th>
                                            <th className='text-center'>Цена</th>
                                            <th className='text-center'>Количество</th>
                                            <th className='text-center'>Удалить</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            cartItems.map(item => <Tr item={item} key={item.id}/>)
                                        }
                                        </tbody>
                                    </table>
                            }
                            <div className="mt-4">
                                <h4>
                                    Итого:
                                    <span className="cart__subtotal"> {totalAmount}$</span>
                                </h4>
                                <div className="cart__page-btn">
                                    <button className="addCart__btn me-4 mt-4">
                                        <Link to="/products">Продолжить покупку</Link>
                                    </button>
                                    <button className="addCart__btn">
                                        <Link to="/checkout">Оформить</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

const Tr = (props) => {
    const { id, image01, title, price, quantity } = props.item;
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };

    return(
        <tr>
            <td className='text-center'><img className='cart__img' src={image01} alt=""/></td >
            <td className='text-center'>{title}</td >
            <td className='text-center'>${price}</td >
            <td className='text-center'>{quantity}</td >
            <td className='text-center cart__item-del'><i className="ri-delete-bin-6-line" onClick={deleteItem}></i></td>
        </tr>
    )
}

export default Cart;
