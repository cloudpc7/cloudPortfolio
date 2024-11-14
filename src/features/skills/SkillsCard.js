import { useSpring, animated } from '@react-spring/web';
import { useState, useRef, useEffect } from 'react';
import { ListGroup, Image } from "react-bootstrap";
import { Tooltip} from 'reactstrap';
import "../../styles/components/skills/skills.scss";

const SkillsCard = ({ skill, onCardClick }) => {
  const { name, image, description } = skill;
  const [flipped, setFlipped] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: flipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
    config: { mass: 0.3, tension: 900, friction: 30 },
  });

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setFlipped(false);
    }
  }, [skill]);

  const handleClick = () => {
    setFlipped(!flipped);
    onCardClick(skill.id);
  };

  return (
      <ListGroup.Item
        onClick={handleClick}
        className="skill-card border-0 p-0 m-0"
        data-skill-id={skill.id}
        id={`card-${skill.id}`}
      >
      <Tooltip
        isOpen={tooltipOpen}
        toggle={toggle}
        target={`#card-${skill.id}`}
      >
      click on me!
      </Tooltip>
          <div className="anime-card">
            <animated.div
              className="card-front"
              style={{
                opacity: opacity.to(o => 1 - o),
                transform,
              }}
            >
              <p>{name}</p>
              <Image src={image} loading="lazy" className="skill-image" alt={name} />
            </animated.div>
            <animated.div
              className="card-back"
              style={{
                opacity,
                transform: transform.to(t => `${t} rotateX(180deg)`),
              }}
            >
              <p style={{color: '#DAA520'}}>{name}</p>
              <p style={{color: '#DAA520'}}>{description}</p>
            </animated.div>
          </div>
      </ListGroup.Item>
  );
}

export default SkillsCard;