import React from 'react';
import Helmet from '../components/Hl/Hel.js';
import {Col, Container, Row} from "react-bootstrap";
import homeImg from '../assets/images/home-img.jpg';
import '../styles/home-section.css'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Helmet title='Home'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="home__img">
                                <img src={homeImg} alt="home-img" className='w-100'/>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="home__content">
                                <h5 className='mb-3'>Магазин, где обретают счастье</h5>
                                <h1 className='mb-4 home__title'>Покупай <span>лапку счастья</span> и участвуй в
                                    розыграше!</h1>
                                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                    velit..</p>
                                <div className="home__btns d-flex align-items-center gap-5 mt-4">
                                    <button className='order__btn d-flex align-items-center justify-content-between'>
                                        Купить сейчас
                                        <i className="ri-arrow-right-s-line"></i>
                                    </button>
                                    <button className='products__btn d-flex align-items-center justify-content-between'>
                                        <Link to='/products'>Посмотреть все товары</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
