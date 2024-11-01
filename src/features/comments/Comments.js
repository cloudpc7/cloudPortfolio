import { formatDate } from '../../utils/formatDate';
import { Card } from 'react-bootstrap';
import "../../styles/components/comments/comments.scss";
const Comment = ({comment}) => {
    const { text: commentText, recommended, author, date } = comment;
    return (
        <Card className="px-md-0 px-4">
            <p className="text-center text-md-start lh-sm">{commentText}</p>
            <br />
            <p className="text-center text-md-start">{recommended}/5 stars -- {author}, {formatDate(date)}</p>
        </Card>
    )
}

export default Comment;