import React from 'react';
import '../../Style/footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col>
            <h4>Listelligent</h4>
            <p>2173 Salk Ave #250 Carlsbad CA 92008</p>
          </Col>
          <Col>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col>3</Col>
          <Col>4</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;