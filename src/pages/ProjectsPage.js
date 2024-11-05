import { Container,Row, Col, Button } from 'react-bootstrap';
import ProjectsList from '../features/projects/ProjectsList';
import "../styles/components/ProjectPage/projectPage.scss";

const ProjectsPage = () => {

    return (
        <Container fluid className="mt-5">
            <Row className="">
                <Col  className="">
                    <h1 className="
                        project-page-title 
                        text-center  
                        text-md-start 
                        text-lg-center 
                        text-uppercase 
                        py-3
                    "
                >
                    Projects
                </h1>
                </Col>
                <Col className="
                    d-flex 
                    align-items-center 
                    justify-content-lg-center
                    "
                >
                    <Button className="
                    call-to-action border-0 
                    rounded-0 mx-auto  
                    mx-md-0 px-3 
                    py-3
                    "
                >
                    Let's Create
                </Button>
                </Col>
            </Row>
            <Row className="
                row
                row-cols-1
                row-cols-xs-1
                my-5
                justify-content-center
                "
            >
                <ProjectsList />
            </Row>
        </Container>
    )
}

export default ProjectsPage;
