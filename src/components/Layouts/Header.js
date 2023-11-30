import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../../Style/headerstyle.css';

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" className='navbar'>
            <Container>
                <Navbar.Brand href="/" className='nav-logo'>Listelligent</Navbar.Brand>
                <Nav className="me-auto nav-links">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/contact'}>Contact</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;