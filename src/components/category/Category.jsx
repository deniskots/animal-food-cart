import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../styles/category.css'

import categoryImg01 from "../../assets/images/categoryImg01.png";
import categoryImg02 from "../../assets/images/categoryImg02.png";
import categoryImg03 from "../../assets/images/categoryImg03.png";
import categoryImg04 from "../../assets/images/categoryImg04.png";

const categoryData = [
    {
        display: "Собаки",
        imgUrl: categoryImg01,
    },
    {
        display: "Кошки",
        imgUrl: categoryImg02,
    },

    {
        display: "Птицы",
        imgUrl: categoryImg03,
    },

    {
        display: "Корова",
        imgUrl: categoryImg04,
    },
];

const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((item, index) => (
                    <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category__img">
                                <img src={item.imgUrl} alt="category__item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                ))
                }
            </Row>
        </Container>
    );
};

export default Category;