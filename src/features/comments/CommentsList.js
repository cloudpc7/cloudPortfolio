import { Container, Row, Col } from 'react-bootstrap';
import Comment from './Comments';
import { selectCommentsByProjectId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import "../../styles/components/comments/comments.scss";

const CommentsList = ({ projectId }) => {
    const comments = useSelector(selectCommentsByProjectId(projectId));

    return (
        <Container fluid>
            <Row className="row row-cols-md-12 row-cols-lg-3 mx-5">
                {comments.map((comment) => (
                    <Col md={6} key={comment.id}>  {/* Moved key here */}
                        <Comment comment={comment} />
                    </Col>
                ))}
            </Row>
            <Row className="row row-cols-1 justify-content-center align-items-center">
                <Col className="d-flex flex-column col-8 align-items-center">
                    <CommentForm projectId={projectId} />
                </Col>
            </Row>
        </Container>
    );
};

export default CommentsList;

