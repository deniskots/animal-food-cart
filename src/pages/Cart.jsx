import React from 'react';
import CommonSection from "../components/common-section/CommonSection";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import '../styles/cartPage.css';
import '../styles/product-cart.css';

const Cart = () => {
    return (
        <div>
            <CommonSection/>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h5 className="text-center">Ваша карзина пуста</h5>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Изображение</th>
                                    <th>Название</th>
                                    <th>Цена</th>
                                    <th>Количество</th>
                                    <th>Удалить</th>
                                </tr>
                                </thead>
                                <tbody> </tbody>
                            </table>
                            <div className="mt-4">
                                <h6>
                                    Итого: $
                                    <span className="cart__subtotal">1333</span>
                                </h6>
                                <p>Cтоимость доставки будут рассчитаны при оформлении заказа</p>
                                <div className="cart__page-btn">
                                    <button className="addCart__btn me-4">
                                        <Link to="/foods">Продолжить покупку</Link>
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

export default Cart;
