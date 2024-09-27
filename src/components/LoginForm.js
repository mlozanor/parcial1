import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Credenciales predefinidas
  const validUser = {
    email: 'user@example.com',
    password: 'password123',
  };

  const authenticate = async (email, password) => {
    if (email === validUser.email && password === validUser.password) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await authenticate(email, password);
    if (isValid) {
      onLogin();
      navigate('/robots');
    } else {
      setError(true);
    }
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa',
    },
    container: {
      maxWidth: '600px', 
      width: '100%',
      padding: '20px',
    },
    headerContainer: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    robotsImage: {
      width: '100%',
      maxWidth: '800px',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    formContainer: {
      backgroundColor: '#f2f2f2',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
      marginBottom: '20px',
    },
    formLabel: {
      display: 'block',
      marginBottom: '10px',
      fontWeight: 'bold',
      color: '#333',
    },
    formControl: {
      width: '100%',
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    btnIngresar: {
      backgroundColor: '#3498db',
      borderColor: '#3498db',
      padding: '12px 20px',
      fontSize: '1.2rem',
      marginTop: '10px',
      width: '48%',
    },
    btnCancelar: {
      backgroundColor: '#e74c3c',
      borderColor: '#e74c3c',
      padding: '12px 20px',
      fontSize: '1.2rem',
      marginTop: '10px',
      width: '48%',
    },
    btnContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    errorText: {
      color: 'red',
      marginTop: '20px',
      fontWeight: 'bold',
      fontSize: '1.1rem',
    },
    contactInfo: {
      marginTop: '20px',
      fontSize: '1rem',
      color: '#7f8c8d',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Container style={styles.container}>
        <div style={styles.headerContainer}>
          <h1 style={styles.headerTitle}>Adopta un Robot con Robot Lovers!</h1>
          <Image src={require('../images/imagenheader.png')} fluid style={styles.robotsImage} alt="Robots" />
        </div>
        <Row className="justify-content-md-center">
          <Col md={12}>
            <Form onSubmit={handleSubmit} style={styles.formContainer}>
              <h3 style={styles.headerTitle}>Inicio de sesión</h3>
              <Form.Group controlId="formBasicEmail" style={styles.formGroup}>
                <Form.Label style={styles.formLabel}>Nombre de usuario</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.formControl}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" style={styles.formGroup}>
                <Form.Label style={styles.formLabel}>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.formControl}
                />
              </Form.Group>
              {error && (
                <div style={styles.errorText}>
                  Error de autenticación. Revise sus credenciales.
                </div>
              )}
              <div style={styles.btnContainer}>
                <Button variant="primary" type="submit" style={styles.btnIngresar}>
                  Ingresar
                </Button>
                <Button variant="danger" style={styles.btnCancelar}>
                  Cancelar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
          <Col md={12} className="text-center">
            <p style={styles.contactInfo}>
              Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
