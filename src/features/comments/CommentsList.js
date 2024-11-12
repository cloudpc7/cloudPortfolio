import { Container, Row, Col } from 'react-bootstrap';
import Comment from './Comments';
import { selectCommentsByProjectId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import "../../styles/components/comments/comments.scss";

const CommentsList = ({ projectId }) => {
    const comments = useSelector(selectCommentsByProjectId(projectId));

    return (
        <Container className="comment-container">
            <Row className="comment">
                {comments.map((comment) => (
                    <Col lg={4} className="comments-card">
                        <Comment comment={comment} />
                    </Col>
                        
                ))}
            </Row>
            <Row className="">
                <Col className="">
                    <CommentForm projectId={projectId} />
                </Col>
            </Row>
        </Container>
    );
};

export default CommentsList;

