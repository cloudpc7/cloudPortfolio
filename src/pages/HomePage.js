import {  Container, Row, Col, Button } from 'react-bootstrap';
import SkillsList from '../features/skills/SkillsList';
import "../styles/components/HomePage/HomePage.scss";

const HomePage = () => {
    return (
        <Container>    
            <Row 
                className="
                 mt-5
                 justify-content-sm-center
                 justify-content-md-around
                 justify-content-lg-between
                 row-cols-md-2
                 row-cols-lg-12
                "
            >
                <Col
                    sm={6}
                    md={2}
                    lg={7}
                    className="p-lg-0"
                >
                    <h1 className="
                        hero-title 
                        h1 
                        lh-3 
                        text-center 
                        text-md-start
                        ps-2
                        ps-lg-0
                        "
                    > 
                        Crafting Insipiring Websites Together.
                    </h1> 
                </Col>
                
                <Col 
                    sm={7}
                    md={5}
                    lg={5}
                    xl={5}
                    xxl={4}
                    className="ms-xl-auto p-xl-0"
                >
                    <p className="
                        hero-caption
                        text-center 
                        text-md-start 
                        my-4 
                        mt-md-5
                        mb-md-0
                        lh-base
                        "
                    >
                        I am a website developer that specializes in developing sophisticated web applications
                        by providing a tailored experience.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center justify-content-lg-start mt-md-2 mt-lg-0">
                <Col xs={12} lg={3}  className="d-flex justify-content-center justify-content-lg-start text-center mx-xs-auto mt-sm-3 mt-md-5  p-lg-0">
                    <Button    
                        className="call-to-action border-0 rounded-0 px-3 py-3 px-lg-0 px-lg-5 mx-sm-auto mx-lg-0 mx-xl-0"  
                    >
                        Let's Create
                    </Button>
                </Col>
            </Row>
            <SkillsList />
        </Container>
    );
};

export default HomePage;
