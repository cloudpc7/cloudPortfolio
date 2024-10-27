import {Container, Row, Nav, Image} from 'react-bootstrap';
import linkedInIcon from '../app/assets/img/linkedin-logo.svg';
import "../styles/components/Footer/Footer.scss";

const Footer = () => {
    return (
        <Nav className="align-items-end">
            <Container className="d-flex align-items-center justify-content-end p-0">
                <Nav.Item>
                    <Nav.Link className="p-0">
                        <Image src={linkedInIcon} className="linked-icon pe-3"/>
                    </Nav.Link>
                </Nav.Item>
                <p className="copyright">
                    Created and Developed By 
                    <span className="text-uppercase ps-1">Paul Cloud</span> 2024
                </p>
            </Container>
        </Nav>              
    )
}

export default Footer;