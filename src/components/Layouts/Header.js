import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../../Style/headerstyle.css';

const Header = () => {
    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/">Listelligent</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Listelligent
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
                                    {/* <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/agentsignup">Agents SignUp</Nav.Link>
                                    <Nav.Link href="/howitwork">How Its Work</Nav.Link> */}
                                    <Link to={'/'}>Home</Link>
                                    <Link to={'/agentsignup'}>Agents SignUp</Link>
                                    <Link to={'/howitwork'}>How Its Work</Link>
                                </Nav>
                                <Button variant="outline-light" className='header-login-btn'>LOGIN</Button>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Header;