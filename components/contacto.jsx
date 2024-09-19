"use client"

import React, { useState } from 'react';
import axios from "axios"


const customStyles = {
    overlay: {
      //backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      backgroundColor: 'black',
      //color: '#fff',
      //border: 'none',
      //borderRadius: '8px',
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px'
    }
  };


function ContactForm({setOpen}) {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    empresa: "",
    email: '',
    telefono: "",
    comentarios: "",
    fecha_ingreso: ""
  });
  const [ loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    formData.fecha_ingreso = new Date()
    e.preventDefault();
    setLoading(true)
    axios.post('https://back-nexuco.onrender.com/setContacto', {
     ...formData
    })
    .then(function (response) {
      if (response.status === 200)
        {
          setOpen(false)
          setLoading(false)
        }
    })
    .catch(function (error) {
      setLoading(false)
      console.log(error);
    });
    // Por ejemplo, puedes enviar los datos a un servidor o realizar otras acciones.
  };

  return (
    <>
    <form onSubmit={handleSubmit} >
    <div className="isolate px-6 lg:px-8 border-l border-gray-700 text-slate-500 hover:text-slate-400" style={customStyles.content}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nombres"
            className="block text-sm font-semibold leading-6 text-accent-content"
          >
            Nombres
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="nombres"
              onChange={handleChange}
              id="nombres"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="apellidos"
            className="block text-sm font-semibold leading-6 text-accent-content"
          >
            Apellidos
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              onChange={handleChange}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="empresa"
            className="block text-sm font-semibold leading-6 text-accent-content"
          >
            Empresa
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="empresa"
              id="empresa"
              onChange={handleChange}
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-accent-content"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="telefono"
            className="block text-sm font-semibold leading-6 text-accent-content"
          >
            Telefono
          </label>
          <div className="relative mt-2.5">
            <input
              type="tel"
              name="telefono"
              id="telefono"
              onChange={handleChange}
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="comentarios"
            className="block text-sm font-semibold leading-6 text-accent-content"
          >
            Comentarios
          </label>
          <div className="mt-2.5">
            <textarea
              name="comentarios"
              id="comentarios"
              rows="4"
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          disabled={loading}
          className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
      </div>
    </div>
    </form>
    </>
  );
}

export default ContactForm;
