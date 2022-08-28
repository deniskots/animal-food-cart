import React, {useState} from 'react';
import CommonSection from "../components/common-section/CommonSection";
import {Col, Container, Row} from "react-bootstrap";
import products from "../assets/fake-data/products";
import ProductCart from "../components/product-cart/ProductCart";

import '../styles/allProducts.css';
import '../styles/pagination.css';
import ReactPaginate from "react-paginate";


const AllProducts = () => {
    const [searchInput, setSearchInput] = useState("");
    const [pageCount, setPageCount] = useState(0);

    const searchedItems = products.filter(item => {
        if (searchInput.value === '') return item
        if (item.title.toLowerCase().includes(searchInput.toLowerCase())) return item
    });

    const itemsPerPage = 8;
    const visitedPage = pageCount * itemsPerPage;
    const displayPage = searchedItems.slice(visitedPage, visitedPage + itemsPerPage);
    const pageNumber = Math.ceil(searchedItems.length / itemsPerPage);
    const changePage = ({selected}) => {
        setPageCount(selected)
    }


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
                                <span><i className="ri-search-line"></i></span>
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
                            displayPage.map(item => (
                                    <Col lg='3' md='4' sm='6' key={item.id}>
                                        <ProductCart item={item}/>
                                    </Col>
                                ))
                        }
                        <div>
                            <ReactPaginate
                                pageCount={pageNumber}
                                onPageChange={changePage}
                                previousLabel={<i className="ri-arrow-left-line"></i>}
                                nextLabel={<i className="ri-arrow-right-line"></i>}
                                containerClassName=" paginationBtns "
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default AllProducts;
