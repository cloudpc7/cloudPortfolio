import { formatDate } from '../../utils/formatDate';
import '../../styles/components/comments/comments.scss'
const Comment = ({ comment }) => {
    const { text: commentText, rating, author, date } = comment;

    return (
        <>
            <p className="comment-text">{commentText}</p>
            <p className="comment-rating">{rating}/5 stars -- {author}, {formatDate(date)}</p>
        </>
    )
};

export default Comment;