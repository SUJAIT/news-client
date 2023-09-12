import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';



import Header from '../sheard/Header';
import RightNav from '../sheard/RightNav';
import Footer from '../sheard/footer';

const NewsLayOut = () => {
    return (
              <div>
            <Header></Header>
            <Container>
                <Row>
               
                    <Col lg={9}>
                      <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
           

        </div>
    );
};

export default NewsLayOut;