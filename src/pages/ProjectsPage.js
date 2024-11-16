import { Container,Row, Col } from 'react-bootstrap';
import ProjectsList from '../features/projects/ProjectsList';
import ProjectForm from '../components/ProjectForm';
import "../styles/components/ProjectPage/projectPage.scss";

//adding a comment to test functionality of application
const ProjectsPage = () => {

    return (
        <Container className="project-page">
            <Row className="project-page-container">
                <Col className="project-page-col">
                    <h1 className="project-page-title ">
                        Projects
                    </h1>
                </Col>
                <Col className="call-col">
                    <ProjectForm />
                </Col>
                <Col className="carousel-container">
                    <ProjectsList />
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectsPage;
