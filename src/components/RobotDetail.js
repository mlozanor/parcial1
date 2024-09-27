import React from 'react';
import { Table, Container, Row, Col, Image, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Datos de los robots
const robotsData = [
    {
      id: 1,
      nombre: 'Pedrito',
      modelo: 'PR-001',
      empresaFabricante: 'Robotico Corp',
      añoFabricacion: 2023,
      capacidadProcesamiento: '2.5 GHz',
      humor: "Como un perrito pequeño, siempre buscando atención y moviendo su 'cola' robótica",
      imagen: require('../images/robot1.png'),
    },
    {
      id: 2,
      nombre: 'IronChef',
      modelo: 'IC-3000',
      empresaFabricante: 'RoboCocina Inc.',
      añoFabricacion: 2021,
      capacidadProcesamiento: '3.2 GHz',
      humor: 'Fanático de la cocina, siempre bromeando con chistes de comida y recomendando recetas',
      imagen: require('../images/robot2.png'),
    },
    {
      id: 3,
      nombre: 'Chispita',
      modelo: 'LT-007',
      empresaFabricante: 'SparkBots Ltd.',
      añoFabricacion: 2020,
      capacidadProcesamiento: '1.8 GHz',
      humor: 'Alegre y juguetón, con comportamiento como un gatito curioso',
      imagen: require('../images/robot3.png'),
    },
    {
      id: 4,
      nombre: 'SeñorCalculín',
      modelo: 'MC-808',
      empresaFabricante: 'Mathematrix Solutions',
      añoFabricacion: 2022,
      capacidadProcesamiento: '4.0 GHz',
      humor: 'Serio pero sarcástico, con chistes de matemáticas',
      imagen: require('../images/robot4.png'),
    },
    {
      id: 5,
      nombre: 'DoctoraBot',
      modelo: 'HL-9000',
      empresaFabricante: 'MediTech Industries',
      añoFabricacion: 2024,
      capacidadProcesamiento: '3.8 GHz',
      humor: 'Doctora estricta con humor seco, siempre recordando que te laves las manos',
      imagen: require('../images/robot5.png'),
    },
    {
      id: 6,
      nombre: 'ZumbaTron',
      modelo: 'ZT-2025',
      empresaFabricante: 'DanceTech Co.',
      añoFabricacion: 2025,
      capacidadProcesamiento: '2.9 GHz',
      humor: 'Energético amante del baile, siempre motivando a moverse',
      imagen: require('../images/robot6.png'),
    },
  ];

const RobotDetail = () => {
  const { t } = useTranslation();  // Hook de traducción
  const { robotId } = useParams(); // Obtener el ID del robot desde la URL
  const robot = robotsData.find((r) => r.id === parseInt(robotId)); // Buscar el robot por su ID

  if (!robot) {
    return <div>{t('robotNotFound')}</div>;
  }

  const styles = {
    container: {
      marginTop: '50px',
    },
    robotInfo: {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    imageStyle: {
      maxWidth: '100%',
      borderRadius: '10px',
      border: '1px solid #ddd',
      marginBottom: '20px',
    },
    cardStyle: {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    },
    robotTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  };

  return (
    <Container style={styles.container}>
      <Row>
        {/* Columna de la imagen */}
        <Col md={5}>
          <Image src={robot.imagen} fluid style={styles.imageStyle} />
        </Col>

        {/* Columna de la información del robot */}
        <Col md={7}>
          <Card style={styles.cardStyle}>
            <Card.Body>
              <Card.Title style={styles.robotTitle}>{robot.nombre}</Card.Title>
              <Card.Text style={styles.robotInfo}>
                <strong>{t('yearOfManufacture')}:</strong> {robot.añoFabricacion} <br />
                <strong>{t('processingCapacity')}:</strong> {robot.capacidadProcesamiento} <br />
                <strong>{t('humor')}:</strong> {t(`robotDescriptions.${robot.id}`)} <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RobotDetail;
