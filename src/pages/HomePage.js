import {  Row, Col, Button } from 'react-bootstrap';
import SkillsList from '../features/skillslist';
import "../styles/components/HomePage/HomePage.scss";

const HomePage = () => {
    return (
        <>    
            <Row 
                className="
                    row
                    row-cols-xs-1
                    row-cols-sm-1
                    row-cols-md-6
                    row-cols-lg-8
                    row-cols-xl-8
                    row-cols-xxl-12
                    mt-5
                    justify-content-center
                "
            >
                <Col
                  md={4}
                  lg={4}
                  xxl={4}
                  className=""
                >
                    <h1 className="text-sm-center hero-title h1 lh-1"> 
                        cloud
                    </h1> 
                </Col>
                
                <Col 
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    xxl={4}
                    className="px-xs-0 px-sm-4 px-md-0"
                >
                    <h2 className="h2 fw-bolder text-center text-lg-start px-md-4 px-lg-5 mb-md-0 my-4">
                        A website developer that brings specially crafted and sophisticated web designs
                        by providing a tailored experience.
                    </h2>
                </Col>
            </Row>
            <Row className="justify-content-center mt-md-2 mt-lg-4">
                <Col xs={12} className="text-center mt-md-3">
                    <Button    
                        className="call-to-action border-0 rounded-0 px-3 py-3"  
                    >
                        Let's Create
                    </Button>
                </Col>
            </Row>
            <SkillsList />
        </>
    );
};

export default HomePage;
