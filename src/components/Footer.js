import {Container, Nav, Image} from 'react-bootstrap';
import "../styles/components/Footer/Footer.scss";
import linkedIn from "../app/assets/images/linkedin-logo.svg";
const Footer = () => {
    return (
        <Nav className="align-items-end">
            <Container className="d-flex align-items-center justify-content-end p-0">
                <Nav.Item>
                    <Nav.Link className="p-0">
                        <Image src={linkedIn} className="linked-icon pe-3"/>
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