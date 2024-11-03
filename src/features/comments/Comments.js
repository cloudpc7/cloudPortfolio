import { formatDate } from '../../utils/formatDate';
import { Card } from 'react-bootstrap';
const Comment = ({ comment }) => {
    const { text: commentText, rating, author, date } = comment;

    return (
        <Card className="px-md-0 px-4">
            <p className="text-center text-md-start lh-sm">{commentText}</p>
            <br />
            <p className="text-center text-md-start">{rating}/5 stars -- {author}, {formatDate(date)}</p>
        </Card>
    )
};

export default Comment;