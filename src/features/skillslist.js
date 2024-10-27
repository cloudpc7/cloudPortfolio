import { useState } from 'react';
import { skills } from "../app/skills";
import { ListGroup,Col, Image } from 'react-bootstrap';
import "../styles/main/main.scss";
import "../styles/components/skills/skills.scss";

const SkillsList = () => {
    const [skillsList, setSkillsList] = useState(skills)
    const skillObj = skillsList.map((skill,index) =>{
        return (
                <ListGroup.Item 
                    key={index}
                    className="
                    col
                    d-flex flex-column
                    flex-lg-row
                    border-0
                    mb-4
                    mb-xl-2
                    align-items-center
                    justify-content-center
                    "
                >
                <p className="text-center me-lg-2 me-xxl-5">
                        {skill.name}
                </p> 
                    <Image 
                        src={skill.image}
                    />
                </ListGroup.Item>
        )
    })

    return (
        <ListGroup 
            horizontal 
            className="
                row
                row-cols-2
                row-cols-xs-2
                row-cols-sm-3
                row-cols-md-4
                row-cols-lg-5
                row-cols-xxl-5
                my-5
                px-lg-3
                px-xxl-5
                justify-content-around
                "
            >
            {skillObj}
        </ListGroup>
    )
}

export default SkillsList;