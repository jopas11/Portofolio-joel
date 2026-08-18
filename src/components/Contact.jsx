import React, { useState } from 'react'

export default function Contact({ email }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const customEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT
  const formEndpoint = customEndpoint || `https://formsubmit.co/ajax/${encodeURIComponent(email)}`

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.message) {
      alert('Lengkapi semua field terlebih dahulu.')
      return
    }

    setIsSending(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const payload = new FormData()
      payload.append('name', form.name)
      payload.append('email', form.email)
      payload.append('message', form.message)
      payload.append('_subject', `Pesan baru dari portfolio - ${form.name}`)
      payload.append('_replyto', form.email)
      payload.append('_template', 'table')

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      })

      const responseData = await response.json().catch(() => null)
      if (!response.ok || responseData?.success === false) {
        throw new Error(responseData?.message || 'Gagal mengirim pesan.')
      }

      setForm({ name: '', email: '', message: '' })
      setStatus({
        type: 'success',
        message: 'Pesan berhasil terkirim. Cek email aktivasi jika ini pengiriman pertama FormSubmit.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Pesan gagal dikirim. Coba lagi beberapa saat.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Kontak</p>
          <h2>Punya ide project? Mari diskusikan.</h2>
          <p>
            Kirim kebutuhan Anda lewat form di samping. Saya biasanya merespons dalam 1x24 jam kerja melalui email.
          </p>
          <ul className="social-list">
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joel-pasaribu-ba29111ab" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/jopas11" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="field" htmlFor="name">
            Nama
            <input id="name" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label className="field" htmlFor="email">
            Email
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label className="field" htmlFor="message">
            Pesan
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn" disabled={isSending}>
            {isSending ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
          {status.message && (
            <p className={`form-status ${status.type === 'error' ? 'is-error' : 'is-success'}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
