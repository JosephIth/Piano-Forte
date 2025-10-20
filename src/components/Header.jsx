import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header({cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal,
  onCategorySelect // <-- nuevo prop
}
) {
    return (
        <header>
            <Navbar id = "nav_Bar" expand="lg" className="bg-body-tertiary">
                <Container fluid id="nav_Container">
                    <Navbar.Brand href="#" className="brand-center"><img src="/icono.png" alt="icono" width="120px" height="80px"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" id="togglerNav"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            id = "nav_Nav"
                            className="me-auto my-2 my-lg-0"

                            navbarScroll
                        >
                            <Nav.Link href="#" onClick={(e) => { e.preventDefault(); onCategorySelect && onCategorySelect('All') }}>Inicio</Nav.Link>
                            <Nav.Link href="#action2">Conocenos</Nav.Link>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#" onClick={(e) => { e.preventDefault(); onCategorySelect && onCategorySelect('Album') }}>Albumes</NavDropdown.Item>
                            
                            <NavDropdown.Item href="#" onClick={(e) => { e.preventDefault(); onCategorySelect && onCategorySelect('Instrumento') }}>
                                Equipos de Sonido
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={(e) => { e.preventDefault(); onCategorySelect && onCategorySelect('Accesorio') }}>
                                Accesorios
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={(e) => { e.preventDefault(); onCategorySelect && onCategorySelect('Productos') }}>
                                Todos los Productos
                            </NavDropdown.Item>                            
                            </NavDropdown>
                            <Nav.Link href="#">
                            Cuenta
                            </Nav.Link>
                        
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

        </header>
    )
}