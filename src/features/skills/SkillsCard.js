import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { ListGroup, Image } from "react-bootstrap";
import "../../styles/components/skills/skills.scss";

const SkillsCard = ({ skill }) => {
    const { id, name, url, image, description } = skill;
    const [flipped, setFlipped] = useState(false);

    const { transform } = useSpring({
        transform: flipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
        config: { tension: 300, friction: 20 }
    });

    return (
        <ListGroup.Item
            onClick={() => setFlipped(!flipped)}
            className="
                skill-card 
                border-0 
                p-0 
                m-0
            "
        >
            <animated.div className="
                anime-card 
                d-flex 
                align-items-center  
                justify-content-center
            " 
            style={{ transform,
                    position: "relative",
                    transition: "transform 0.6s",
                    transformStyle:" preserve-3d",
                    backgroundColor: "#050505"
                 }}> 
                <div className="
                    card-front 
                    text-center 
                    d-flex 
                    flex-column
                    align-items-center
                    " 
                    style={{
                    position: "absolute",
                    backfaceVisibility: "hidden",
                    color: "#fff"
                    }}
                >
                    <p className="py-2">{name}</p>
                    <Image src={image} loading="lazy" className="py-2 skill-image" />
                </div>
                <animated.div
                    className="card-back text-center"
                    style={{
                        transform: 'rotateX(180deg)',
                        backfaceVisibility: 'hidden',
                        position: "absolute",
                        color: "#fff",
                        cursor: "pointer"
                    }}
                >
                    <p className="py-2">{name}</p>
                    <p className="py-2 lh-base">{description}</p>
                </animated.div>
            </animated.div>
        </ListGroup.Item>
    );
}

export default SkillsCard;
