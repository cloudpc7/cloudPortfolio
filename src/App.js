import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import Container from 'react-bootstrap/Container';

import './styles/components/App/App.scss';

function App() {
  return (
    <Container fluid>
      <Header />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='about' element={<AboutPage />}/>
            <Route path='contact' element={<ContactPage />}/>
            <Route path='projects' element={<ProjectsPage />}/>
          </Routes>
          <Footer />
    </Container>

  )
}

export default App;
