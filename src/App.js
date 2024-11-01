import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import Container from 'react-bootstrap/Container';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { fetchProjects } from './features/projects/projectsSlice';
import { fetchSkills } from './features/skills/skillsSlice';
import { fetchComments } from './features/comments/commentsSlice';

import './styles/components/App/App.scss';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchSkills());
    dispatch(fetchComments());
  },[dispatch])

  return (
    <Container fluid>
      <Header />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='about' element={<AboutPage />}/>
            <Route path='contact' element={<ContactPage />}/>
            <Route path='projects' element={<ProjectsPage />}/>
            <Route
              path='projects/:projectId'
              element={<ProjectDetailPage />}
            />
          </Routes>
          <Footer />
    </Container>

  )
}

export default App;
