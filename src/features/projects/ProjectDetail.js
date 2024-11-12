import { Col, Image } from 'react-bootstrap';
import "../../styles/components/projectDetail/projectDetail.scss";
const ProjectDetail = ({ project}) => {
    const { name, image } = project;
    return (  
        <Col xs={8} md={8} className="project-image-col">
        <Image src={image} alt={name} className="project-image"/> 
        </Col>  
    );
};


export default ProjectDetail;
