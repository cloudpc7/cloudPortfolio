import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/components/comments/comments.scss";
const ProjectCard = ({ project }) => {
    const {id, name, url, image, description} = project;

    return (
        <Link to={`${id}`} className="link link-underline link-underline-opacity-0" >
            <Card className="mb-5 border-0 ">
                <Card.Img variant="top" src={image} alt={name} className="p-2"/>
                <Card.Title className="text-center py-2">
                    {name}
                </Card.Title>
                <Card.Body>
                    <Card.Text className="text-center lh-sm">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default ProjectCard;