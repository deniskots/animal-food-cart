import React, {useEffect, useState} from 'react';
import Helmet from '../components/Hl/Hel.js';
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import homeImg from '../assets/images/home-img.jpg';
import homeImg2 from '../assets/images/home-img02.jpg';
import '../styles/home-section.css'
import {Link} from "react-router-dom";
import Category from "../components/category/Category";
import '../styles/home.css';
import '../styles/products-home.css';
import deliveryImg from '../assets/images/delivery.png'
import dealImg from '../assets/images/deal.png'
import happyImg from '../assets/images/happy.png'
import ProductCart from "../components/product-cart/ProductCart";
import products from "../assets/fake-data/products";

const featureData = [
    {
        title: "Быстрая доставка",
        imgUrl: deliveryImg,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },

    {
        title: "В любую точку мира",
        imgUrl: dealImg,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
        title: "Все счастливы",
        imgUrl: happyImg,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
];

const Home = () => {
    const [category, setCategory] = useState('Все');
    const [allProducts, setAllProducts] = useState(products);


    useEffect(() => {
        if (category === 'Все') {
            setAllProducts(products)
        }
        if (category === 'Корм') {
            const filterProduct = products.filter(item => item.category === 'Корм')
            setAllProducts(filterProduct)
        }
        if (category === 'Витамины') {
            const filterProduct = products.filter(item => item.category === 'Витамины')
            setAllProducts(filterProduct)
        }
        if (category === 'Шампунь') {
            const filterProduct = products.filter(item => item.category === 'Шампунь')
            setAllProducts(filterProduct)
        }
    }, [category]);


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
            <section>
                <Category/>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="feature__title">Наша цель что бы вы не о чем не </h2>
                            <h2 className="feature__title">
                                <span>беспокоились</span>
                            </h2>
                            <p className="mb-1 mt-4 feature__text">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                                officiis?
                            </p>
                            <p className="feature__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam, eius.{" "}
                            </p>
                        </Col>

                        {featureData.map((item, index) => (
                            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                                <div className="feature__item text-center px-5 py-3">
                                    <img
                                        src={item.imgUrl}
                                        alt="feature-img"
                                        className="mb-3"
                                    />
                                    <h5 className=" fw-bold mb-3">{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2>Ваши популярные товары</h2>
                        </Col>
                        <Col lg="12">
                            <div className="product__category d-flex align-items-center justify-content-center gap-4">
                                <button
                                    className={`all_btn ${category === 'Все' ? 'productBtnActive' : ''}`}
                                    onClick={() => setCategory('Все')}
                                >
                                    Все
                                </button>
                                <button
                                    className={`${category === 'Корм' ? 'productBtnActive' : ''}`}
                                    onClick={() => setCategory('Корм')}
                                >
                                    Корм
                                </button>
                                <button
                                    className={`${category === 'Витамины' ? 'productBtnActive' : ''}`}
                                    onClick={() => setCategory('Витамины')}
                                >
                                    Витамины
                                </button>
                                <button
                                    className={`${category === 'Шампунь' ? 'productBtnActive' : ''}`}
                                    onClick={() => setCategory('Шампунь')}
                                >
                                    Шампунь
                                </button>
                            </div>
                        </Col>
                        {
                            allProducts.map((item) => (
                                <Col lg='3' md='4' key={item.id} className='mt-5'>
                                    <ProductCart item={item}/>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
            <section className="choose-us">
                <Container>
                    <Row>
                        <Col className="choose-us__text" lg="6" md="6">
                            <div className="why__hot-dog">
                                <h2 className="tasty__treat-title mb-4">
                                    Почему <span>Hot Dog?</span>
                                </h2>
                                <p className="tasty__treat-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolorum, minus. Tempora reprehenderit a corporis velit,
                                    laboriosam vitae ullam, repellat illo sequi odio esse iste
                                    fugiat dolor, optio incidunt eligendi deleniti!
                                </p>
                                <ListGroup className="mt-4">
                                    <ListGroup.Item className="border-0 ps-0">
                                        <p className=" choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i> Быстро и Удобно
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Quia, voluptatibus.
                                        </p>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="border-0 ps-0">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i> Большой ассортимент
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Qui, earum.
                                        </p>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="border-0 ps-0">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i>Всегда наилучшее
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Qui, earum.
                                        </p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <img src={homeImg2} alt="why-hot-dog" className="w-100"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
