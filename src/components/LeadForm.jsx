import { useState } from 'react'

const initialState = {
  full_name: '',
  email: '',
  phone: '',
  preferred_mode: 'online',
  location: '',
  level: 'beginner',
  goals: '',
  preferred_days: '',
  preferred_time: '',
  consent_marketing: false,
}

function LeadForm() {
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Gagal hantar borang. Sila cuba lagi.')
      const data = await res.json()
      setStatus({ type: 'success', message: 'Terima kasih! Kami akan hubungi anda segera.' })
      setForm(initialState)
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="daftar" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white">Mohon Tempat</h3>
            <p className="text-blue-200/80 mt-2">Isi butiran di bawah. Pasukan kami akan hubungi melalui WhatsApp dalam 24 jam.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-blue-200 mb-1">Nama Penuh</label>
                <input required name="full_name" value={form.full_name} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Email</label>
                  <input type="email" required name="email" value={form.email} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">No. Telefon (WhatsApp)</label>
                  <input required name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Pilihan Kelas</label>
                  <select name="preferred_mode" value={form.preferred_mode} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="online">Online</option>
                    <option value="offline">Bersemuka</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Lokasi (jika bersemuka)</label>
                  <input name="location" value={form.location} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Tahap Bacaan</label>
                  <select name="level" value={form.level} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="beginner">Asas</option>
                    <option value="intermediate">Pertengahan</option>
                    <option value="advanced">Lanjutan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Hari Pilihan</label>
                  <input name="preferred_days" value={form.preferred_days} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Waktu Pilihan</label>
                  <input name="preferred_time" value={form.preferred_time} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Matlamat Pembelajaran</label>
                  <input name="goals" value={form.goals} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <label className="inline-flex items-center gap-2 text-blue-200/90">
                <input type="checkbox" name="consent_marketing" checked={form.consent_marketing} onChange={handleChange} className="h-4 w-4 rounded border-white/20 bg-slate-900/60" />
                Saya setuju menerima info program melalui WhatsApp/Email
              </label>

              <button disabled={loading} className="w-full mt-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition">
                {loading ? 'Menghantar...' : 'Hantar Permohonan'}
              </button>

              {status && (
                <div className={`mt-3 text-sm px-3 py-2 rounded ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30' : 'bg-red-500/10 text-red-300 ring-1 ring-red-500/30'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 ring-1 ring-white/10 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white">Apa Yang Anda Akan Dapat</h3>
            <ul className="mt-4 space-y-3 text-blue-100/90 list-disc pl-5">
              <li>Penilaian tahap bacaan dan sebutan huruf</li>
              <li>Jadual belajar fleksibel mengikut kesesuaian</li>
              <li>Modul latihan bertahap dengan rekod kemajuan</li>
              <li>Komuniti pelajar dewasa untuk motivasi</li>
              <li>Perkongsian amalan adab dan tajwid</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadForm
