import React from 'react';
import '../Style/home.css';
import Layout from '../components/Layouts/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsGeoAltFill } from "react-icons/bs";
import Image from 'react-bootstrap/Image';
import { HiOfficeBuilding } from "react-icons/hi";
import { MdContactless } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Home = () => {
    return (
        <Layout>
            <div className='first-section'>
                <Container>
                    <Row className='mt-3 first-inner-section'>
                        <Col className='first-left-col'>
                            <h4>Sell Your Home for 1% Connect With Agents in Your Zip Code</h4>
                            <h5>Enter your address to match with a local professional</h5>
                            <div className='zip-search-input'>
                                <InputGroup className="mt-3 zip-search-input-content">
                                    <Form.Control
                                        placeholder="Enter Address"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button className='zip-code-btn'><BsGeoAltFill />Zip Code</Button>
                                    <Button className='find-btn'>Find A Pro</Button>
                                </InputGroup>
                            </div>
                            <p>No Obligation-No Spam-Fast-Simple</p>
                        </Col>
                        <Col><img className='rounded' src='https://www.lt6p.com/re/img/buysell/buyers_moving_family_new.jpg' alt='Image'></img></Col>
                    </Row>

                    <Row className='second-inner-section'>
                        <Col className='agent-col'>
                            <HiOfficeBuilding />
                            <h5>Find Local Agents</h5>
                            <p>Insert your address to connect with top agents that list for 1%</p>
                        </Col>
                        <Col>
                            <MdContactless />
                            <h5>Connect</h5>
                            <p>Review agent profile and schedule an interview</p>
                        </Col>
                        <Col>
                            <FaHandHoldingDollar />
                            <h5>Save Thousands of Dollars!</h5>
                            <p>Work with your agent to get your home sold!</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='second-section'>
                <Container>
                    <Row>
                        <Col>
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

            <div className='third-section'>
                <Container>
                    <Row>
                        <Col className='third-sec-heading'>
                            <h1>Why work with Listelligent?</h1>
                        </Col>
                    </Row>
                    <Row className='third-sec-content'>
                        <Col>
                            <h3>Hassle Free Search</h3>
                            <p>Insert your address and connect with a pro right away! No long questionnaires, spam calls, junk emails or any other nonsense.</p>
                            <h3>Easy Interviews</h3>
                            <p>Chat with your local pro to see if they are a good fit for your Real Estate needs.</p>
                            <h3>Save Thousands of Dollars</h3>
                            <p>Listelligent connects you with top agents that will list your home for 1% netting you more money.</p>
                        </Col>
                        <Col>
                            <img className='rounded' src='https://www.lt6p.com/re/img/buysell/sellers_smiling_couple_new.jpg'></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default Home;