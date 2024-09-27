import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para manejar la autenticación
  const { t, i18n } = useTranslation(); // Hook para manejar la traducción

  const handleLogin = () => {
    setIsAuthenticated(true); // Autenticar al usuario
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Desautenticar al usuario
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambiar el idioma usando i18n
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">RobotAdoption</Navbar.Brand>
          <Nav className="ml-auto">
            <Button variant="outline-primary" onClick={() => changeLanguage('en')}>EN</Button>
            <Button variant="outline-primary" onClick={() => changeLanguage('es')} className="ml-2">ES</Button>
            {isAuthenticated && (
              <Button variant="outline-danger" onClick={handleLogout} className="ml-2">
                Logout
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          {/* Ruta de inicio de sesión */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/robots" /> : <LoginForm onLogin={handleLogin} />} 
          />
          
          {/* Ruta para ver la lista de robots */}
          <Route 
            path="/robots" 
            element={isAuthenticated ? <RobotList /> : <Navigate to="/" />} 
          />
          
          {/* Ruta para ver el detalle de un robot */}
          <Route 
            path="/robot/:robotId"  // Ajustamos para que coincida con el param de `useParams` en RobotDetail.js
            element={isAuthenticated ? <RobotDetail /> : <Navigate to="/" />} 
          />

          {/* Redirigir cualquier otra ruta a la raíz */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
