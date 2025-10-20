import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

export default function Header({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal,
  onCategorySelect
}) {
    const [showRegister, setShowRegister] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [session, setSession] = useState(null)

    useEffect(() => {
        const savedSession = localStorage.getItem('session')
        if (savedSession) {
            setSession(JSON.parse(savedSession))
        }
    }, [])

    const handleLogin = (userData) => {
        setSession(userData)
    }

    const handleLogout = () => {
        localStorage.removeItem('session')
        setSession(null)
    }

    return (
        <header>
            <Navbar id="nav_Bar" expand="lg" className="bg-body-tertiary">
                <Container fluid id="nav_Container">
                    <Navbar.Brand href="#" className="brand-center">
                        <img src="/icono.png" alt="icono" width="120px" height="80px"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" id="togglerNav"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav id="nav_Nav" className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onCategorySelect('Productos') }}>
                                Inicio
                            </Nav.Link>
                            <Nav.Link href="#action2">Conocenos</Nav.Link>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={() => onCategorySelect('Album')}>
                                    Albumes
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => onCategorySelect('Instrumento')}>
                                    Equipos de Sonido
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => onCategorySelect('Accesorio')}>
                                    Accesorios
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => onCategorySelect('Productos')}>
                                    Todos los Productos
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                            {!session ? (
                                <>
                                    <Nav.Link onClick={() => setShowRegister(true)}>
                                        Registro
                                    </Nav.Link>
                                    <Nav.Link onClick={() => setShowLogin(true)}>
                                        Iniciar Sesión
                                    </Nav.Link>
                                </>
                            ) : (
                                <NavDropdown title={`Bienvenido, ${session.name}`} id="nav-dropdown">
                                    <NavDropdown.Item>Mi Perfil</NavDropdown.Item>
                                    <NavDropdown.Item>Mis Pedidos</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>
                                        Cerrar Sesión
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>

                        <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="/Imagenes/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            
                            {isEmpty ? (
                                <p className="text-center">El carrito esta vacio</p>
                            ) : ( 
                                <>                             
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(instrumento => (          
                                                <tr key={instrumento.id}>
                                                    <td>
                                                        <img className="img-fluid" src={`/Imagenes/Productos/${instrumento.image}.jpg`} alt="imagen instrumento" />
                                                    </td>
                                                    <td>{instrumento.name}</td>
                                                    <td className="fw-bold">
                                                            ${instrumento.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => decreaseQuantity(instrumento.id)}
                                                        >
                                                            -
                                                        </button>
                                                        {instrumento.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => increaseQuantity(instrumento.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={() => removeFromCart(instrumento.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <p className="text-end">Total pagar: <span 
                                    className="fw-bold">${cartTotal}</span></p>
                                </>
                            )}                            
                            <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Vaciar Carrito</button>
                        </div>
                    </div>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Busqueda"
                            className="me-2"
                            aria-label="Search"/>
                            <Button id="Boton" variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
                

            </Navbar>

            <RegisterModal
                show={showRegister}
                onHide={() => setShowRegister(false)}
            />
            
            <LoginModal
                show={showLogin}
                onHide={() => setShowLogin(false)}
                onLogin={handleLogin}
            />
        </header>
    )
}