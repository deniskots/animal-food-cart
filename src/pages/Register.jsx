import React, {useRef} from 'react';
import CommonSection from "../components/common-section/CommonSection";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../styles/product-cart.css';



const Register = () => {
    const signupNameRef = useRef();
    const signupPasswordRef = useRef();
    const signupEmailRef = useRef();
    return (
        <>
            <div className='comm-sec'>
                <CommonSection title='Регистрация'/>
            </div>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form m-auto text-center mb-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Имя"
                                        required
                                        ref={signupNameRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Почта"
                                        required
                                        ref={signupEmailRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Пароль"
                                        required
                                        ref={signupPasswordRef}
                                    />
                                </div>
                                <button type="submit" className="addCart__btn ">
                                    Войти
                                </button>
                            </form>
                            <Link to="/register"><h5>Уже есть аккаунт?</h5></Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Register;
