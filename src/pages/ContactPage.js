import {  Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';
import "../styles/components/ContactPage/ContactPage.scss";

const ContactPage = () => {
    return (
        <Container className="contact-form mt-5">
            <Row className="row row-cols-1 p-3">
                <Col className="m-0">
                    <h2 className="h2 fs-1 text-center mb-1">Contact Information</h2>
                </Col>
                <Col className="m-0 d-flex justify-content-around">
                    <Nav>
                        <Nav.Link href="https://discord.com" className="link">
                            <FontAwesomeIcon icon={faDiscord} size="2x"/>
                        </Nav.Link>
                        <Nav.Link href="https://linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                        </Nav.Link>
                        <Nav.Link href="tel:+9513478976">
                            <FontAwesomeIcon icon={faPhone} size="2x" />
                        </Nav.Link>
                        <Nav.Link 
                            className="mailto:cloud@clouddropdesignscom" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>
            <Row className="row row-cols-1 mb-5">
                <Col className="my-2">
                    <h2 className="feed-back-title fs-2 text-center mb-3">Please Provide Feedback</h2>
                </Col>
                <Col className="my-2">
                    <ContactForm /> 
                </Col>
            </Row>
            
        </Container>
    )
}

export default ContactPage;