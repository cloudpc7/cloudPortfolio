import { Card, Col} from 'react-bootstrap/Card';

const ProjectDetail = ({project}) => {
    const {name, url, description } = project;
    return (
        <Col>
            <Card>
                <iframe 
                    src=""
                    title="project"
                />

            </Card>
        </Col>
    )
}

export default ProjectDetail;