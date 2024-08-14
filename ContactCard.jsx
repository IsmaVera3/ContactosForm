import React from 'react';

function ContactCard({ contact, onChange }) {
  return (
    <div className="contact-card">
      <input
        type="text"
        name="firstName"
        placeholder="Nombre"
        value={contact.firstName}
        onChange={onChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={contact.lastName}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Numero"
        value={contact.phone}
        onChange={onChange}
      />
    </div>
  );
}

export default ContactCard;
