import React, {useState} from 'react';
import CommonSection from "../components/common-section/CommonSection";
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import '../styles/product-cart.css';
import '../styles/checkout.css';

const Checkout = () => {
    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");
    const [enterCountry, setEnterCountry] = useState("");
    const [enterCity, setEnterCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 30;
    const totalAmount = cartTotalAmount + Number(shippingCost);


    return (
        <div>
            <div className='comm-sec'>
                <CommonSection title='Оформление'/>
            </div>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="6">
                            <h4 className="mb-4">Адрес доставки</h4>
                            <form className="checkout__form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Введите ваше имя"
                                        required
                                        value={enterName}
                                        onChange={(e) => setEnterName(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Введите вашу почту"
                                        required
                                        value={enterEmail}
                                        onChange={(e) => setEnterEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        placeholder="Введите ваш телефон"
                                        required
                                        value={enterNumber}
                                        onChange={(e) => setEnterNumber(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Страна"
                                        required
                                        value={enterCountry}
                                        onChange={(e) => setEnterCountry(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Город"
                                        required
                                        value={enterCity}
                                        onChange={(e) => setEnterCity(e.target.value)}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="number"
                                        placeholder="Индекс"
                                        required
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="addCart__btn">
                                    Оплатить
                                </button>
                            </form>
                        </Col>
                        <Col lg="4" md="6">
                            <div className="checkout__bill">
                                <div className="checkout__total">
                                    <h3 className="d-flex align-items-center justify-content-between">
                                        Итого: <span>${totalAmount}</span>
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Checkout;
