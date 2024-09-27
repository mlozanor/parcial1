import React, { useState, useEffect } from 'react';
import { Table, Container, Image, Card, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const RobotList = () => {
  const { t } = useTranslation(); // Hook para traducción
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null); // Estado para el robot seleccionado

  // Función para obtener los datos de los robots desde el backend
  const fetchRobots = async () => {
    try {
      const response = await fetch('http://localhost:3001/robots'); // URL del backend
      const data = await response.json(); // Aquí obtienes los robots con las URLs de las imágenes
      setRobots(data); // Guarda los robots en el estado
    } catch (error) {
      console.error('Error fetching robots:', error);
    }
  };

  useEffect(() => {
    fetchRobots(); // Cargar los datos de los robots desde el backend
  }, []);

  // Función para manejar el clic en una fila
  const handleRowClick = (robot) => {
    setSelectedRobot(robot); // Establecer el robot seleccionado
  };

  const styles = {
    container: {
      marginTop: '50px',
    },
    headerContainer: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    headerTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    robotsImage: {
      width: '100%',
      maxWidth: '800px',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    tableHeader: {
      backgroundColor: '#343a40',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    tableRow: {
      cursor: 'pointer',
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    tableCell: {
      padding: '15px',
      verticalAlign: 'middle',
    },
    robotCard: {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '100%', // Ocupa toda la columna
    },
    imageStyle: {
      maxWidth: '100%',
      borderRadius: '10px',
      border: '1px solid #ddd',
      marginBottom: '20px',
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    tableWrapper: {
      flex: 1, // Asegura que la tabla ocupe la mitad
    },
    cardWrapper: {
      flex: 1, // Asegura que la tarjeta ocupe la otra mitad
      marginLeft: '20px',
    },
    contactInfo: {
      fontSize: '1rem',
      color: '#7f8c8d',
    },
  };

  return (
    <Container style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.headerTitle}>{t('robotAdoption')}</h1>
        <Image src={require('../images/imagenheader.png')} fluid style={styles.robotsImage} alt="Robots" />
      </div>

      {/* Usamos flex para organizar la tabla y la tarjeta en la misma fila */}
      <div style={styles.flexContainer}>
        {/* Tabla de robots a la izquierda */}
        <div style={styles.tableWrapper}>
          <Table striped bordered hover responsive>
            <thead style={styles.tableHeader}>
              <tr>
                <th>{t('id')}</th>
                <th>{t('name')}</th>
                <th>{t('model')}</th>
                <th>{t('manufacturer')}</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => handleRowClick(robot)} style={styles.tableRow}>
                  <td style={styles.tableCell}>{robot.id}</td>
                  <td style={styles.tableCell}>{robot.nombre}</td>
                  <td style={styles.tableCell}>{robot.modelo}</td>
                  <td style={styles.tableCell}>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Tarjeta de detalles del robot a la derecha */}
        {selectedRobot && (
          <div style={styles.cardWrapper}>
            <Card style={styles.robotCard}>
              <Card.Body>
                <div style={{ textAlign: 'center' }}>
                  {/* Usamos la URL que viene del backend directamente */}
                  <Image src={selectedRobot.imagen} fluid style={styles.imageStyle} alt={selectedRobot.nombre} />
                </div>
                <Card.Title>{selectedRobot.nombre}</Card.Title>
                <Card.Text>
                  <strong>{t('yearOfManufacture')}:</strong> {selectedRobot.añoFabricacion} <br />
                  <strong>{t('processingCapacity')}:</strong> {selectedRobot.capacidadProcesamiento} <br />
                  <strong>{t('humor')}:</strong> {t(`humor_${selectedRobot.nombre.toLowerCase()}`)}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>

      {/* Sección de contacto */}
      <Row className="justify-content-md-center mt-4">
        <Col md={12} className="text-center">
          <p style={styles.contactInfo}>
            {t('Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers')}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RobotList;
