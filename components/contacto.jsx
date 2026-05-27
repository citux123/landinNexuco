"use client"

import { useState } from 'react'
import axios from 'axios'

const initialFormData = {
  nombres: '',
  apellidos: '',
  empresa: '',
  email: '',
  telefono: '',
  comentarios: '',
}

function InputField({ id, label, required = false, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-100">
        {label}
        {required ? <span className="ml-1 text-cyan-300">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        required={required}
        className="mt-2 block w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
        {...props}
      />
    </div>
  )
}

export default function ContactForm({ setOpen } = {}) {
  const [formData, setFormData] = useState(initialFormData)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post('https://api.nexuco.com/setContacto', {

        ...formData,
        fecha_ingreso: new Date().toISOString(),
      })

      if (response.status === 200) {
        setStatus({
          type: 'success',
          message: 'Recibimos tu informacion. Te contactaremos para revisar tu operacion y siguientes pasos.',
        })
        setFormData(initialFormData)
        setOpen?.(false)
      } else {
        setStatus({
          type: 'error',
          message: 'No fue posible enviar el formulario. Intenta de nuevo en unos minutos.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'No fue posible enviar el formulario. Verifica tus datos o intenta nuevamente.',
      })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_60px_rgba(2,12,27,0.35)] backdrop-blur sm:p-8"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white">Cuéntanos tu contexto</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Comparte los datos basicos y un breve resumen de tu operacion. Asi la primera conversacion ya parte de algo util.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InputField
          id="nombres"
          label="Nombres"
          type="text"
          required
          value={formData.nombres}
          onChange={handleChange}
          autoComplete="given-name"
          placeholder="Nombre"
        />
        <InputField
          id="apellidos"
          label="Apellidos"
          type="text"
          required
          value={formData.apellidos}
          onChange={handleChange}
          autoComplete="family-name"
          placeholder="Apellido"
        />
        <div className="sm:col-span-2">
          <InputField
            id="empresa"
            label="Empresa"
            type="text"
            required
            value={formData.empresa}
            onChange={handleChange}
            autoComplete="organization"
            placeholder="Nombre de la empresa"
          />
        </div>
        <div className="sm:col-span-2">
          <InputField
            id="email"
            label="Correo"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="correo@empresa.com"
          />
        </div>
        <div className="sm:col-span-2">
          <InputField
            id="telefono"
            label="Telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="Numero de contacto"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="comentarios" className="block text-sm font-semibold text-slate-100">
            Comentarios
            <span className="ml-1 text-cyan-300">*</span>
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            rows="5"
            required
            value={formData.comentarios}
            onChange={handleChange}
            placeholder="Describe tus procesos actuales, cuellos de botella o lo que te gustaria ordenar."
            className="mt-2 block w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>
      </div>

      {status.message ? (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            status.type === 'success'
              ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-100'
              : 'border-rose-400/30 bg-rose-400/10 text-rose-100'
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-400">
          Al enviar este formulario, un asesor de Nexuco revisara tu caso y te respondera dentro de 24 horas.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Enviando...' : 'Solicitar conversacion'}
        </button>
      </div>
    </form>
  )
}
