import { useEffect, useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import ProjectCard from './projectCard.js';
import { useSelector } from 'react-redux';
import { selectAllProjects } from './projectsSlice.js';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import "../../styles/components/ProjectPage/projectPage.scss";

const ProjectsList = () => {
  const projects = useSelector(selectAllProjects);
  const isLoading = useSelector((state) => state.projects.isLoading);
  const errMsg = useSelector((state) => state.projects.errMsg);

  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItemsPerSlide = () => {
        const width = window.innerWidth;
        if(width < 768) {
            setItemsPerSlide(1);
        } else if (width < 992) {
            setItemsPerSlide(2);
        } else {
            setItemsPerSlide(3);
        }
    };
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  

  const { carouselFragment } = useSpringCarousel({
    itemsPerSlide: itemsPerSlide,
    withLoop: true,
    items: projects.map((project) => ({
        id: project.id,
        renderItem: (
            <div className="use-spring-carousel-wrapper">
                <ProjectCard project={project}/>
            </div>
        )
    }))
  })
  
  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (errMsg) {
    return (
      <Error errMsg={errMsg} />
    );
  }

  return (
    <div className="carousel">
        { carouselFragment }
    </div>
  );
};

export default ProjectsList;