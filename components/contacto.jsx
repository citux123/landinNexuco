"use client"

import React, { useState } from 'react';

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px'
    }
  };


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefono: "",
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
    // Por ejemplo, puedes enviar los datos a un servidor o realizar otras acciones.
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md" style={customStyles.content}>
      <h2 className="text-lg font-semibold mb-4"> Contactanos </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
            placeholder='Nombre '
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Correo'
            className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tel" className="block text-sm font-medium text-white-700">Telefono:</label>
          <input
            type="number"
            id="tel"
            name="tel"
            value={formData.telefono}
            onChange={handleChange}
            placeholder='Telefono'
            className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
