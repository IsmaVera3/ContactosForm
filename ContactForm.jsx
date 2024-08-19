import React, { useState } from 'react';
import ContactCard from './ContactCard';

function ContactForm({ addContact }) {
  const [contact, setContact] = useState({
    nombre: '',
    apellido: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({ nombre: '', apellido: '', telefono: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactCard contact={contact} onChange={handleChange} />
      <button type="submit">Añadir Contacto</button>
    </form>
  );
}

export default ContactForm;
