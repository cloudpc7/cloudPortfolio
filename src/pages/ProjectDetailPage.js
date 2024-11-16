import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { selectProjectById } from '../features/projects/projectsSlice';
import ProjectDetail from '../features/projects/ProjectDetail';
import CommentsList from '../features/comments/CommentsList';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import "../styles/components/projectDetail/projectDetail.scss";
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
            <Container>
                <Row className="project-detail-container">
                    <ProjectDetail project={project}/>
                    <Col className="comment-container-col">
                        <h2 className="comment-title">
                            Comments
                        </h2>
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