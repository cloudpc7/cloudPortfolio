import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
const ProjectCard = ({project}) => {
    const { id, name, url, description } = project;
    return (
        <>
            <Link to={`${id}`}>
                <Card>
                    <iframe 
                        src={url}
                        title={name}
                    />
                    <Card.Title>{name}</Card.Title>
                    <Card.Body>
                        {description}
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default ProjectCard;