import React, {useState} from 'react';
import CommonSection from "../components/common-section/CommonSection";
import {Col, Container, Row} from "react-bootstrap";
import products from "../assets/fake-data/products";
import ProductCart from "../components/product-cart/ProductCart";

import '../styles/allProducts.css'


const AllProducts = () => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <div>
            <div className='comm-sec'>
                <CommonSection title='Все товары'/>
            </div>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className="search__widget d-flex align-items-center justify-content-between ">
                                <input
                                    type="text"
                                    placeholder="Поиск...."
                                    value={searchInput}
                                    onChange={e => setSearchInput(e.target.value)}
                                />
                                <span>
                  <i className="ri-search-line"></i>
                </span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
                            <div className="sorting__widget text-end">
                                <select className="w-50">
                                    <option>По умолчанию</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>
                        {
                            products.map(item => (
                                <Col lg='3' md='4' sm='6' key={item.id}>
                                    <ProductCart item={item} />
                                </Col>
                                ))
                        }



                        {/*<div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                containerClassName=" paginationBttns "
                            />
                        </div>*/}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default AllProducts;
