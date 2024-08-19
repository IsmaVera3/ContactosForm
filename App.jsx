import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/contacts')
      .then((response) => setContacts(response.data))
      .catch((error) => console.error('Error fetching contacts:', error));
  }, []);

  const addContact = (newContact) => {
    axios.post('http://localhost:3001/contacts', newContact)
      .then((response) => setContacts([...contacts, response.data]))
      .catch((error) => console.error('Error adding contact:', error));
  };

  const deleteContact = (id) => {
    axios.delete(`http://localhost:3001/contacts/${id}`)
      .then(() => setContacts(contacts.filter(contact => contact.id !== id)))
      .catch((error) => console.error('Error deleting contact:', error));
  };

  return (
    <div className="App">
      <h1>Lista de Contactos</h1>
      <ContactForm addContact={addContact} />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.nombre} {contact.apellido} - {contact.telefono}
            <button onClick={() => deleteContact(contact.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
