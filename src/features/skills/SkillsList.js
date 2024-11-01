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

    if(isLoading) {
        return (
            <Loading />
        );
    } else if(errMsg) {
        return (
            <Error errMsg={errMsg}/>
        )
    }

    return (
        <ListGroup className="
            my-5 
            row 
            row-cols-xs-1 
            row-cols-sm-2
            row-cols-md-3
            row-cols-lg-6
            row-cols-xl-6
            flex-row 
            justify-content-center
            "
        >
          {skills.map((skill) => (
              <SkillsCard key={skill.id} skill={skill} />
          ))}
        </ListGroup>
    )
}

export default SkillsList;