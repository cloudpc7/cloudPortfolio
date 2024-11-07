import { Col, Image } from 'react-bootstrap';

const ProjectDetail = ({ project}) => {
    const { name, image } = project;
    console.log(project.url);
    return (
        
        <Col xs={8} md={8} className="mb-3">
        <Image src={image} alt={name} className="w-100"/> 
        </Col>  
    );
};


export default ProjectDetail;
