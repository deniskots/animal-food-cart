import React, {useEffect, useState} from 'react';
import products from "../assets/fake-data/products";
import CommonSection from "../components/common-section/CommonSection";
import {Col, Container, Row} from "react-bootstrap";

import '../styles/productDetails.css';
import '../styles/allProducts.css';
import '../styles/product-cart.css';
import {useNavigate, useParams} from "react-router-dom";
import ProductCart from "../components/product-cart/ProductCart";
import {cartActions} from "../redux/slices/cartSlice";
import {useDispatch} from "react-redux";

const ProductDetails = () => {
    //отображение картинки продукта
    const {id} = useParams()
    const product = products.find(item => item.id === id)
    const [prevImg, setPrevImg] = useState(product.image01)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");

    const { title, price, category, desc, image01 } = product;

    //переключения описания и отзывов
    const [tab, setTab] = useState("desc");
    //схожие товары
    const relatedProduct = products.filter((item) => category === item.category);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        setPrevImg(product.image01)
    },[product])
//для воззащения выбранного товара
    useEffect(() => {
        window.scrollTo(0, 10);
    }, [product]);

    const goBack = () => {
        navigate(-1)
    }

    const addItem = () => {
        dispatch(cartActions.addItem({id, title, image01, price}))
    }


    return (
    <div>
        <div className='comm-sec'>
            <CommonSection title={title}/>
        </div>
        <section>
            <Container>
                <button className="back__btn mb-5" onClick={goBack}>
                    <i className="ri-arrow-go-back-line "></i>
                </button>
                <Row>
                    <Col lg="2" md="2">
                        <div className="product__images ">
                            <div className="img__item mb-3" onClick={() => setPrevImg(product.image01)}>
                                <img src={product.image01} alt="" className="w-25"/>
                            </div>
                            <div className="img__item mb-3" onClick={() => setPrevImg(product.image02)}>
                                <img src={product.image02} alt="" className="w-25"/>
                            </div>
                            <div className="img__item" onClick={() => setPrevImg(product.image03)}>
                                <img src={product.image03} alt="" className="w-25"/>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="4">
                        <div className="product__main-img">
                            <img src={prevImg} alt="" className="w-80"/>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="single__product-content">
                            <h2 className="product__title mb-3">{title}</h2>
                            <p className="product__price">
                                Price: <span>${price}</span>
                            </p>
                            <p className="category mb-5">
                                Category: <span>{category}</span>
                            </p>
                            <button className="addCart__btn" onClick={addItem}>
                                Добавить
                            </button>
                        </div>
                    </Col>

                    <Col lg="12">
                        <div className="tabs d-flex align-items-center gap-5 py-3">
                            <h6 className={`${tab === 'desc' ? 'tab__active': ''}`} onClick={() => setTab('desc')}>Описание</h6>
                            <h6 className={`${tab === 'rev' ? 'tab__active': ''}`} onClick={() => setTab('rev')}>Отзыв</h6>
                        </div>
                        {
                            tab === 'desc' ?
                                <div className="tab__content">
                                    <p>{desc}</p>
                                </div> :
                                <div className="tab__form">
                                    <div className="review pt-4">
                                        <p className="user__name mb-0">Jho Doe</p>
                                        <p className="user__email">jhon1@gmail.com</p>
                                        <p className="feedback__text">Супер, мне все понравилось</p>
                                    </div>
                                    <div className="review">
                                        <p className="user__name mb-0">Ivan Gogol</p>
                                        <p className="user__email">jhon1@gmail.com</p>
                                        <p className="feedback__text">Удовлетворительно</p>
                                    </div>
                                    <div className="review">
                                        <p className="user__name mb-0">Vova Frunk</p>
                                        <p className="user__email">jhon1@gmail.com</p>
                                        <p className="feedback__text">Все очень плохо, аллергия</p>
                                    </div>
                                    <form className='form' onSubmit={(e) => e.preventDefault()}>
                                        <div className="form__group">
                                            <input
                                                type="text"
                                                placeholder='Введите имя'
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                required/>
                                        </div>
                                        <div className="form__group">
                                            <input
                                                type="text"
                                                placeholder='Введите почту'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required/>
                                        </div>
                                        <div className="form__group">
                                            <textarea
                                                type="text"
                                                rows={5}
                                                placeholder='Введите текст'
                                                value={review}
                                                onChange={e => setReview(e.target.value)}
                                                required/>
                                        </div>
                                        <button type="submit" className="addCart__btn">
                                            Отправить
                                        </button>
                                    </form>
                                </div>
                        }
                    </Col>

                    <Col lg="12" className="mb-5 mt-4">
                        <h2>Похожие товары</h2>
                    </Col>
                    {
                        relatedProduct.map((item) => (
                            <Col key={item.id} lg='4' md='4' sm='6' xs='6' className='mb-4'>
                                <ProductCart item={item}/>
                            </Col>
                        ))
                    }
                    ))}
                </Row>
            </Container>
        </section>
    </div>
    );
};

export default ProductDetails;
