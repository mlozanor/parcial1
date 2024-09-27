import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const robotsData = [
  {
    id: 1,
    nombre: 'Pedrito',
    modelo: 'PR-001',
    empresaFabricante: 'Robotico Corp',
  },
  {
    id: 2,
    nombre: 'IronChef',
    modelo: 'IC-3000',
    empresaFabricante: 'RoboCocina Inc.',
  },
  {
    id: 3,
    nombre: 'Chispita',
    modelo: 'LT-007',
    empresaFabricante: 'SparkBots Ltd.',
  },
  {
    id: 4,
    nombre: 'SeñorCalculín',
    modelo: 'MC-808',
    empresaFabricante: 'Mathematrix Solutions',
  },
  {
    id: 5,
    nombre: 'DoctoraBot',
    modelo: 'HL-9000',
    empresaFabricante: 'MediTech Industries',
  },
  {
    id: 6,
    nombre: 'ZumbaTron',
    modelo: 'ZT-2025',
    empresaFabricante: 'DanceTech Co.',
  },
];

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setRobots(robotsData);
  }, []);

  const handleRowClick = (id) => {
    navigate(`/robot/${id}`);
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
  };

  return (
    <Container style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.headerTitle}>Adopta un Robot con Robot Lovers!</h1>
        <Image src={require('../images/imagenheader.png')} fluid style={styles.robotsImage} alt="Robots" />
      </div>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Table striped bordered hover responsive>
            <thead style={styles.tableHeader}>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Empresa Fabricante</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => handleRowClick(robot.id)} style={styles.tableRow}>
                  <td style={styles.tableCell}>{robot.id}</td>
                  <td style={styles.tableCell}>{robot.nombre}</td>
                  <td style={styles.tableCell}>{robot.modelo}</td>
                  <td style={styles.tableCell}>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default RobotList;
