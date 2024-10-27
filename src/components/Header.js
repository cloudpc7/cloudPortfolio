import { useState } from 'react';
import { Container, Navbar,Nav, Button, Offcanvas, NavDropdown, Form} from 'react-bootstrap';
import '../styles/components/Header/Header.scss';
const Header = () => {

    return (
        <Navbar expand="lg">
            <Container className="p-0">
                <Navbar.Toggle
                    aria-controls="offcanvasNavbar-expand-md"
                />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasnavbar-expand-md"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        cloud
                    </Offcanvas.Header>
                    <Offcanvas.Body className="align-items-center">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="link">
                                <i className="fa fa-home fa-2x" />
                            </Nav.Link>
                            <Nav.Link href="about" className="link">
                                <i className="fa fa-info fa-2x" />
                            </Nav.Link>
                            <Nav.Link href="contact" className="link">
                                <i className="fa fa-address-card fa-2x" />
                            </Nav.Link>
                            <Nav.Link href="projects" className="projects-tab">
                                Projects
                            </Nav.Link>
                        </Nav>
                        <Navbar.Brand className="m-0">cloud</Navbar.Brand>
                        <Nav className="d-flex justify-content-end">
                            <Nav.Link href="https://facebook.com" className="link">
                                <i className="fa fa-facebook fa-2x" />
                            </Nav.Link>
                            <Nav.Link href="https://x.com" className="link">
                                <i className="fa fa-twitter fa-2x" />
                            </Nav.Link>
                            <Nav.Link href="https://github.com" className="link">
                                <i className="fa fa-github fa-2x" />
                            </Nav.Link>
                        </Nav>   
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}

export default Header;