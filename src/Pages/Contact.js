import React from 'react';
import Layout from '../components/Layouts/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <div><h1>Contact</h1></div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Contact;