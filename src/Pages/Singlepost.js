import React from 'react';
import '../Style/singlepost.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import Image from 'react-bootstrap/Image';

const Singlepost = () => {
    return (
        <>
            <div className='singlepost-navbar-Container'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Navbar expand="lg" className='singlepost-navbar'>
                                <Container>
                                    <Navbar.Brand href="/" className='singlepost-nav-logo'>Listelligent</Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Col>
                        <Col lg={12} className='d-flex justify-content-center breadcrumb'>
                            <ul>
                                <li><a href='/'>Home</a><HiOutlineChevronRight /></li>
                                <li>Rhode Island</li>
                            </ul>
                        </Col>
                        <Col className='header-heading'>
                            <h2>Top Real Estate Agents</h2>
                            <h2>in Rhode Island</h2>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col lg={3}></Col>
                        <Col lg={6}>
                            <Form className='header-search'>
                                <Form.Control size="lg" type="text" placeholder="Search" />
                                <Button variant="warning">GET STARTED<HiOutlineArrowSmRight /></Button>{' '}
                            </Form>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </Container>
            </div>


            <div className='singlepost-second-section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1>How much can I save by using a Listelligent pro?</h1>
                            <h1 className='mt-4'>Sales Price</h1>

                        </Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col xs={6} className='rang-label'>
                            <Form.Label>Listing Price</Form.Label>
                            <Form.Range />
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row className='calculation-colunms'>
                        <Col className='calculator-stat-listelligent'>
                            <p>Agent fees with listelligent</p>
                            <p>1%</p>
                            <h3>$18,200</h3>
                        </Col>
                        <Col className='calculator-stat-others'>
                            <p>Other Agents</p>
                            <p>3%</p>
                            <h3>$21,000</h3>
                        </Col>
                        <Col className='calculator-stat-saving'>
                            <p>Potential Savings:</p>
                            <h3>$2,800</h3>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className='singlepost-third-section'>
                <Container>
                    <Row>
                        <Col lg={12} className='agent-heading'>
                            <h2>Agents to Select</h2>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='agent-table'>
                        <Col md={4}>
                            <Row>
                                <Col md={4}>
                                    <Image src="https://storage.googleapis.com/upnest1/upload/realtor/1212867110_260c2e97-5191-4c7c-bc42-67a8a879dc04.jpeg" roundedCircle />
                                </Col>
                                <Col md={8} className='agent-table-content'>
                                    <h4>Emilio DiSpirito IV</h4>
                                    <p>Owner, Engel & Völkers</p>
                                    <Button variant="outline-primary">Primary</Button>{' '}
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>2</Col>
                        <Col md={4}>3</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Singlepost;