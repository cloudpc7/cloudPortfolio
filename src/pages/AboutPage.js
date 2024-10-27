import { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import "../styles/components/AboutPage/AboutPage.scss";
import sunrise from  "../app/assets/img/hide-obara-TeX_yWATaBA-unsplash.jpg";

const AboutPage = () => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <Container>
            <Row className="row row-cols-1 mt-5">
                <Col className="d-flex justify-content-center px-3 px-sm-5">
                    <Image className="sunset" src={sunrise} fluid/>
                </Col>
                <Col className="text-center my-3">
                    <h1 className="h2">Crafting Exceptional Web Experiences</h1>
                </Col>
                <Col className="d-flex my-3">
                    <Button
                        className="
                            contact mx-auto
                            border-0
                            rounded-0
                            px-5
                            py-3
                        "
                        >
                        Contact Me
                    </Button>
                </Col>
            </Row>
            <Row className="
                row 
                row-cols-1 
                row-cols-lg-12 
                mt-3
                text-center
                text-lg-start
                justify-content-lg-around
                px-lg-5
                mb-5
                "
            >
               <Col lg={6} xl={4} className="my-3">
                    <h2 className="h2 fs-1 mb-3">Welcome</h2>
                    <p className="px-3 px-lg-0 mb-3 mb-lg-0 lh-base">
                        Thank you for visiting my portfolio! My name is Paul, and I’m based
                        in Southern California. I am eager to work as a web developer, specializing 
                        in HTML, CSS, JavaScript, React, and React Native.
                    </p>
                </Col>
                <Col lg={4} xl={4} className="my-3">
                    <h2 className="h2 fs-1 mb-3">Why I design</h2>
                        <p className="px-3 px-lg-0 mb-3 mb-lg-0 lh-base">
                            I thrive on creating uniquely crafted and tailored web pages. When I design, 
                            I aim to deliver a "wow" factor that captures everyone’s attention.  
                        </p>   
                </Col>
                <Col lg={6} xl={4} className="my-3 text-center text-xl-start">
                    <h2 className="h2 fs-1 mb-3">How I got here.</h2>
                        <p className="px-3 px-lg-0 mb-3 mb-lg-0 lh-base">
                            I began my journey in 2016, taking a leap of faith into the IT industry. 
                            Over the course of five years, I worked my way up from a desktop support technician 
                            to a systems administrator.I began coding and web development in 2018, motivated to 
                            teach myself about the field.
                        </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage;