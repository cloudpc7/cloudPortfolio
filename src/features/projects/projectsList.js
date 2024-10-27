import { selectAllProjects } from './projectsSlice';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { selectAll } from '@testing-library/user-event/dist/cjs/event/index.js';
import { useSelector } from 'react-redux';
const ProjectsList = () => {

    const projects = useSelector(selectAllProjects)

    return (
        <Row>
            {projects.map((project) => (
                <Col>
                    <ProjectCard project={project}/>
                </Col>
            ))}
        </Row>
    )
}

export default ProjectsList;