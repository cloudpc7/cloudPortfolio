import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { selectProjectById } from '../features/projects/projectsSlice';
import ProjectDetail from '../features/projects/ProjectDetail';
import CommentsList from '../features/comments/CommentsList';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = useSelector(selectProjectById(projectId));
    const isLoading = useSelector((state) => state.projects.isLoading);
    const errMsg = useSelector((state) => state.projects.errMsg);

    let content = null;

    if(isLoading) {
        content = <Loading />
    }else if(errMsg) {
        content = <Error />
    } else {
        content = (
            <Container fluid className="my-5">
                <Row className="
                    row
                    row-cols-1
                    row-cols-sm-1
                    justify-content-center 
                    p-0
                    "
                >
                    <ProjectDetail project={project}/>
                    <Col className="p-0"
                        >
                        <h4 className="
                            h4 
                            comment-title 
                            text-center  
                            "
                        >
                            Comments
                        </h4>
                        <CommentsList projectId={projectId}/>
                    </Col>
                </Row> 
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                {content}
            </Row>
        </Container>
    )

}

export default ProjectDetailPage;