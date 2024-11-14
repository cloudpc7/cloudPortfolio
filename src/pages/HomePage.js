import { Container, Row, Col } from 'react-bootstrap';
import SkillsList from '../features/skills/SkillsList';
import ProjectForm from '../components/ProjectForm';
import "../styles/components/HomePage/HomePage.scss";

const HomePage = () => {

  return (
    <Container className="p-0">
      <Row className="hero row row-cols-xl-8">
        <Col className="hero-title-col"> 
          <h1 className="hero-title">
            Crafting Inspiring Websites Together.
          </h1>
        </Col>
        <Col className="hero-caption-col">
          <p className="hero-caption">
            "I am a website developer that specializes in developing sophisticated web applications
            by providing a tailored experience."
          </p>
        </Col>
        <Col className="hero-button-col">
          <ProjectForm  />
        </Col>
      </Row>
      <SkillsList />
    </Container>
  );
};

export default HomePage;