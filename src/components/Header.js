import { Container, Navbar,Nav, Offcanvas} from 'react-bootstrap';
import '../styles/components/Header/Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleshow = () => setShow(true);

    return (
        <Navbar expand="lg">
            <Container className="p-0">
                <Navbar.Toggle
                    onClick={handleshow}
                    aria-controls="offcanvasNavbar-expand-md"
                />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasnavbar-expand-md"
                    placement="start"
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        cloud
                    </Offcanvas.Header>
                    <Offcanvas.Body className="align-items-center">
                        <Nav className="ml-auto">
                            <Nav.Link as={ Link } to="/" className="link" onClick={handleClose}>
                                home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" className="link" onClick={handleClose}>
                                about
                            </Nav.Link>
                            <Nav.Link as={ Link } to="/contact" className="link" onClick={handleClose}>
                                contact
                            </Nav.Link>
                            <Nav.Link as={ Link } to="/projects" onClick={handleClose}>
                                projects
                            </Nav.Link>
                            <Nav.Link href="https://facebook.com" target="_blank" className="link" onClick={handleClose}>
                                <i className="fa fa-facebook fa-2x" />
                            </Nav.Link>
                            <Nav.Link href="https://x.com" target="_blank" className="link">
                                <i className="fa fa-twitter fa-2x" />
                            </Nav.Link>
                            <Nav.Link href="https://github.com" target="_blank" className="link">
                                <i className="fa fa-github fa-2x" />
                            </Nav.Link>
                            <Navbar.Brand className="ms-auto">cloud</Navbar.Brand>
                        </Nav>  
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}

export default Header;