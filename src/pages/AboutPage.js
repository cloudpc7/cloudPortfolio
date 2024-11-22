import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/components/AboutPage/AboutPage.scss";
import sunset from "../app/assets/images/sunset.jpg";

const AboutPage = () => {
  return (
    <Container  className="about-container">
      <Row className="about">
        <Col className="about-image-col">
          <Image className="sunset" src={sunset} />
        </Col>
        <Col className="about-title-col">
          <h1 className="about-title">Crafting Exceptional Web Experiences!</h1>
        </Col>
        <Col className="about-btn-col">
          <Link className="contact" to='/contact'>
            Contact Me
          </Link>
        </Col>
      </Row>
      <Row className="content about-content">
        <Col className="about-content-title-col">
          <h2 className="sub-title">Welcome</h2>
          <p>
            Thank you for visiting my portfolio! My name is Paul, and I’m based
            in Southern California. I am eager to work as a web developer, specializing
            in HTML, CSS, JavaScript, React, and React Native.
          </p>
        </Col>
        <Col className="about-content-title-col">
          <h2 className="sub-title">Why I design</h2>
          <p> 
            I thrive on creating uniquely crafted and tailored web pages. When I develop,
            I aim to deliver a "wow" factor that captures everyone’s attention.
          </p>
        </Col>
        <Col className="about-content-title-col"> 
          <h2 className="sub-title">How I got here.</h2>
          <p> 
            I began my journey in 2016, taking a leap of faith into the IT industry.
            Over the course of five years, I worked my way up from a desktop support technician
            to a systems administrator. I began coding and web development in 2018, motivated to
            teach myself about the field.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage;