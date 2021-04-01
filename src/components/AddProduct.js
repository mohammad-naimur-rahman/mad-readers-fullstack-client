import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProductGrid from './AddProductGrid';
import SideNav from './SideNav';

const AddProduct = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, overflowX: 'hidden' }}>
            <Row>
                <Col lg={3} md={4}>
                    <SideNav />
                </Col>
                <Col lg={9} md={8}>
                    <AddProductGrid />
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;