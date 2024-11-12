import {  Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';
import "../styles/components/ContactPage/ContactPage.scss";

const ContactPage = () => {
    return (
        <Container className="contact-form">
            <Row className="contact-container">
                <Col className="contact-col">
                    <h1 className="contact-title">Contact Information</h1>
                </Col>
                <Col className="contact-links-col">
                    <Nav className="contact-links">
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
            <Row className="feedback-container">
                <h2 className="feed-back-title">Please Provide Feedback</h2>
                    <Col className="contact-form-container">
                        <ContactForm /> 
                    </Col>
            </Row>
            
        </Container>
    )
}

export default ContactPage;