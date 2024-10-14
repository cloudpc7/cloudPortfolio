import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import './styles/components/App.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />}/>
          </Routes>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
