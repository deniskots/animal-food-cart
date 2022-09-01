import React, {useRef} from 'react';
import CommonSection from "../components/common-section/CommonSection";
import '../styles/product-cart.css';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
    const loginNameRef = useRef();
    const loginPasswordRef = useRef();


    return (
        <>
            <div className='comm-sec'>
                <CommonSection title='Авторизация'/>
            </div>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form m-auto text-center mb-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Почта"
                                        required
                                        ref={loginNameRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Пароль"
                                        required
                                        ref={loginPasswordRef}
                                    />
                                </div>
                                <button type="submit" className="addCart__btn ">
                                    Войти
                                </button>
                            </form>
                                <Link to="/register"><h5>Еще нет аккаунта?</h5></Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;
