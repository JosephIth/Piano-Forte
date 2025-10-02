import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css'


function App() {

  return (
    <Navbar id = "nav_Bar" expand="lg" className="bg-body-tertiary">
      <Container fluid id="nav_Container">
        <Navbar.Brand href="#"><img src="Imagenes/nav-icon/icono.png" alt="Girl in a jacket" width="120px" height="80px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" id="togglerNav"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id = "nav_Nav"
            className="me-auto my-2 my-lg-0"

            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Conocenos</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Instrumentos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Equipos de Sonido
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Cuenta
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busqueda"
              className="me-2"
              aria-label="Search"
            />
            <Button id="Boton" variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default App