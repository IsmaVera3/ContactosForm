import React from 'react';

function ContactCard({ contact, onChange }) {
  return (
    <div className="contact-card">
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={contact.nombre}
        onChange={onChange}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={contact.apellido}
        onChange={onChange}
      />
      <input
        type="text"
        name="telefono"
        placeholder="Numero"
        value={contact.telefono}
        onChange={onChange}
      />
    </div>
  );
}

export default ContactCard;
