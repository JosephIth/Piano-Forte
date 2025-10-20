import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function RegisterModal({ show, onHide }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (form.password !== form.confirm) {
      setError('Las contraseñas no coinciden')
      return
    }

    setLoading(true)
    try {
      // Obtener usuarios existentes
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Verificar si el email ya existe
      if (users.some(user => user.email === form.email)) {
        throw new Error('Este email ya está registrado')
      }

      // Crear nuevo usuario
      const newUser = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        password: form.password, 
        createdAt: new Date().toISOString()
      }

      // Guardar en localStorage
      localStorage.setItem('users', JSON.stringify([...users, newUser]))
      
      setForm({ name: '', email: '', password: '', confirm: '' })
      onHide()
      alert('Registro exitoso')
    } catch (err) {
      console.error(err)
      setError(err.message || 'Error al registrar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
              placeholder="Tu nombre" 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
              placeholder="tu@ejemplo.com" 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              name="password" 
              value={form.password} 
              onChange={handleChange} 
              required 
              placeholder="Contraseña" 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control 
              type="password" 
              name="confirm" 
              value={form.confirm} 
              onChange={handleChange} 
              required 
              placeholder="Repite la contraseña" 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={loading}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}