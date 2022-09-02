import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import contactImg from '../assets/images/contact-img.jpg'
import CommonSection from "../components/common-section/CommonSection";
import {Link} from "react-router-dom";
import '../styles/contacts.css'

const Contacts = () => {
    return (
        <div>
        <div className='comm-sec'>
            <CommonSection title='О нас'/>
        </div>
        <Container className='mt-5 mb-3'>
            <Row>
                <Col lg="6" md="6">
                    <div className="testimonial">
                        <h2 className="testimonial__title mb-4">Почему у нас?</h2>
                        <p className="testimonial__desc">
                            Наш зоомагазин предлагает широчайший ассортимент зоотоваров,
                            а также кормов самого высокого качества - это разнообразные сухие корма,
                            консервы, различные лакомства и витамины.
                        </p>
                        <h4>Наша мисcия</h4>
                        <p className="testimonial__desc">
                            Мы работаем над тем, чтобы стать самым надежным и удобным онлайн-местом для любителей животных.
                            Наш успех измеряется счастьем людей и их питомцев, а не просто количеством поставляемых нами товаров.
                            Вот почему мы по-прежнему думаем о том, что мы можем наслаждаться,
                            удивлять и благодарить наших преданных любимцев.
                        </p>
                        <div className="social__links d-flex align-items-center gap-4 justify-content-sm-start mt-5">
                            <p className="m-0">Подписывайтесь: </p>
                            <span>
                                <a href="https://www.facebook.com/denis.kotsubinsky">
                                    <i className="ri-facebook-line"></i>
                                </a>
                            </span>
                            <span>
                            <a href="https://github.com/deniskots">
                              <i className="ri-github-line"></i>
                            </a>
                          </span>
                            <span>
                            <a href="https://www.youtube.com/watch?v=iucW5evsuLE&ab_channel=RelaxwithTVBackgrounds">
                              <i className="ri-youtube-line"></i>
                            </a>
                          </span>
                            <span>
                            <a href="https://www.linkedin.com/in/kotsubinsky/">
                              <i className="ri-linkedin-line"></i>
                            </a>
                          </span>
                            </div>
                    </div>
                </Col>
                <Col lg="6" md="6">
                    <img src={contactImg} alt="testimonial-img" className="w-75"/>
                </Col>
            </Row>
        </Container>
</div>
    );
};

export default Contacts;
