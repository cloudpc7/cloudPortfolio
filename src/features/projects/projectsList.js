import { selectAllProjects } from './projectsSlice';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
const ProjectsList = () => {

    const projects = useSelector(selectAllProjects)
    const isLoading = useSelector((state) => state.projects.isLoading);
    const errMsg = useSelector((state) => state.projects.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        )
    }

    return (
        <Row className="
            row-cols-1 
            row-cols-sm-1 
            row-cols-md-2 
            row-cols-lg-8 
            justify-content-around
            "
        >
            {projects.map((project) => (
                <Col lg={6} key={project.id} >
                    <ProjectCard project={project}/>
                </Col>
            ))}
        </Row>
    )
}

export default ProjectsList;