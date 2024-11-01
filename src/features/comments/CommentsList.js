import { Container, Row, Col } from 'react-bootstrap';
import Comment from './Comments';
import { selectCommentsByProjectId } from './commentsSlice';
import CommentForm from './CommentForm';
import { useSelector } from 'react-redux';
import "../../styles/components/comments/comments.scss";


const CommentsList = ({ projectId }) => {
    const comments = useSelector(selectCommentsByProjectId(projectId));


        return  (
            <Container fluid>

                <Row className="row row-cols-md-12 row-cols-lg-3 mx-5">
                    {comments.map((comment) => {
                        return (
                            <Col md={6}>
                                <Comment key={comment.id} comment={comment} />;
                            </Col>
                        )
                    })}
                    <Row>
                        <Col>
                            <CommentForm projectId={projectId}/>
                        </Col>
                    </Row>
                </Row>
            </Container>
        )
};

export default CommentsList;