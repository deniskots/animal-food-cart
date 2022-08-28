import React from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import '../../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <div className="footer__logo">
                            <img src={logo} alt="logo"/>
                            <h5>Hot Dog</h5>
                            <p>
                                Наш зоомаркет предлагает максимально обширный каталог продукции.
                                Посетив в интернете зоомагазин, вы получаете возможность ознакомиться с полным
                                ассортиментом зоотоваров.
                            </p>
                        </div>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h4>Наше время работы</h4>
                        <ListGroup className='delivery__time-list'>
                            <ListGroup.Item className='delivery__item-time border-0 ps-0'>
                                <span>Пн-Пт</span>
                                <p>09.00 - 20.00</p>
                            </ListGroup.Item>
                            <ListGroup.Item className='delivery__item-time border-0 ps-0'>
                                <span>Сб-Вс</span>
                                <p>10.00 - 18.00</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h4>Наши контакты</h4>
                        <ListGroup className='delivery__time-list'>
                            <ListGroup.Item className='delivery__item-time border-0 ps-0'>
                                <span>Украина, Запорожье</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='delivery__item-time border-0 ps-0'>
                                <span>Телефон: 303902302930293</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='delivery__item-time border-0 ps-0'>
                                <span>Почта: test@test.com</span>

                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h4>Есть вопросы?</h4>
                        <p>Всегда готовы помочь</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
