import { useState } from 'react'; // Import useState
import { useSelector } from 'react-redux';
import { selectAllSkills } from './skillsSlice';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { ListGroup } from 'react-bootstrap';
import SkillsCard from './SkillsCard';
import "../../styles/main/main.scss";
import "../../styles/components/skills/skills.scss";

const SkillsList = () => {
  const skills = useSelector(selectAllSkills);
  const isLoading = useSelector((state) => state.skills.isLoading);
  const errMsg = useSelector((state) => state.skills.errMsg);

  const [lastClickedId, setLastClickedId] = useState(null); // Add state to track last clicked card

  const handleCardClick = (id) => {
    if (lastClickedId && lastClickedId !== id) {
      // If a different card was clicked previously, reset its flipped state
      const prevCard = document.querySelector(`[data-skill-id="${lastClickedId}"]`);
      if (prevCard) {
        const prevCardState = prevCard.querySelector('.card-front').style.opacity;
        if (prevCardState === '0') { // Check if the previous card is flipped
          prevCard.click(); // Simulate a click to flip it back
        }
      }
    }
    setLastClickedId(id); // Update the last clicked ID
  };

  if (isLoading) {
    return (
      <Loading />
    );
  } else if (errMsg) {
    return (
      <Error errMsg={errMsg} />
    );
  }

  return (
    <ListGroup className="skill-list">
      {skills.map((skill) => (
        <SkillsCard
          key={skill.id}
          skill={skill}
          onCardClick={handleCardClick} // Pass the handler function
          data-skill-id={skill.id} // Add a data attribute to identify the card
        />
      ))}
    </ListGroup>
  );
}

export default SkillsList;