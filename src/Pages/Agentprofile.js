import React from 'react';
import Layout from '../components/Layouts/Layout';
import '../Style/agentprofile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPlayCircle } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                <video src='https://video-cdn.ziggeo.com/v1/applications/e0601e02e994ce8d4763a3cff2190b09/videos/691b73e73d4c589acfd1870b1f2afad0/video.mp4' width="765px" autoPlay controls></video>
            </Modal.Body>
        </Modal>
    );
}

const Agentprofile = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Layout>
            <div className='profile-conteiner'>
                <Container>
                    <Row>
                        <Col md={8}>
                            <Row className='d-flex align-items-center'>
                                <Col md={3}>
                                    <div>
                                        <img src='https://storage.googleapis.com/upnest1/upload/realtor/1505730803_2621ec1e-d519-49f6-84bc-7197ada234d7.jpeg'></img>
                                        <div className='d-flex justify-content-center mt-3 social-icons'>
                                            <FaFacebook className='facebook' />
                                            <FaLinkedin className='linkedin' />
                                            <FaTwitter className='twitter' />
                                            <FaYoutube className='youtube' />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={9} className='profile-content'>
                                    <h2>Roger Browning</h2>
                                    <p>Four Season Reality</p>
                                    <p><span>Agent License #</span>208594</p>
                                    <p><span>Speaks</span>English</p>
                                    <p><span>12</span>Years of Experience</p>
                                    <p><span>20</span>Transaction in Last 12 Months</p>
                                    <p><span>$500K - $30M</span>Price Range</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <div className='video-content'>
                                <img src='https://video-cdn.ziggeo.com/v1/applications/e0601e02e994ce8d4763a3cff2190b09/videos/691b73e73d4c589acfd1870b1f2afad0/image'></img>
                                <Link onClick={() => setModalShow(true)}><FaPlayCircle /></Link>
                                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                            </div>
                        </Col>
                    </Row>

                    <Row className='profile-sub-img-content'>
                        <Col md={12}>
                            <h4>Promotional Materials</h4>
                            <Row className='profile-sub-img'>
                                <Col md={4}>
                                    <img src='https://storage.googleapis.com/upnest1/upload/realtor/672158992_abd6408e-e3d6-4ce7-a7c4-4cf1df8b0497.jpeg'></img>
                                </Col>
                                <Col md={4}>
                                    <img src='https://storage.googleapis.com/upnest1/upload/realtor/672158992_abd6408e-e3d6-4ce7-a7c4-4cf1df8b0497.jpeg'></img>
                                </Col>
                                <Col md={4}>
                                    <img src='https://storage.googleapis.com/upnest1/upload/realtor/672158992_abd6408e-e3d6-4ce7-a7c4-4cf1df8b0497.jpeg'></img>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='agent-about-info'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='agent-about-info-heading'>
                                <h3>More About Roger Browning</h3>
                                <p><span>Specialties:</span> Fine/Luxury Homes, Relocation, Waterfront Homes, Farm/Vineyard</p>
                                <p><span>Certifications & Awards:</span> Broker, Professional Staging Cuunsltant</p>
                                <p><span>Client Endorsements:</span> Exeperienced, Friendly, Good Negotiator, Honest, Knowledgeable, Responsive, Tech Savvy, Well Connected</p>

                                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <div className='slider'>
                <Container>
                    <Row>
                        <Col>
                            <h5>Slider</h5>
                        </Col>
                    </Row>
                </Container>
            </div> */}
        </Layout>
    )
}

export default Agentprofile;