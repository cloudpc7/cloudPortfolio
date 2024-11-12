import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../styles/components/comments/comments.scss";
import "../../styles/components/projectCards/projectCard.scss";
const ProjectCard = ({ project }) => {
    const {id, name, image, description} = project;

    return (
        <Link to={`${id}`} className="card-link" >
            <Card className="project-card">
                <Card.Img variant="top" src={image} alt={name} className="project-card-img"/>
                <Card.Title className="card-title">
                    {name}
                </Card.Title>
                <Card.Body>
                    <Card.Text className="card-body">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default ProjectCard;