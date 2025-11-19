import { useMemo } from 'react'

function Hero() {
  const stats = useMemo(() => ([
    { label: 'Alumni Dewasa', value: '1,200+' },
    { label: 'Tenaga Pengajar', value: '40+' },
    { label: 'Kelas/Minggu', value: '80+' },
  ]), [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-500/30">Kelas Pengajian Al-Quran Dewasa</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Mula Baca Al-Quran Dengan Yakin, Pantas dan Teratur
            </h1>
            <p className="mt-4 text-blue-200/90 leading-relaxed">
              Sertai program bimbingan khas dewasa – sesuai untuk yang baru bermula hingga tahap mahir.
              Belajar secara bertalaqqi, langkah demi langkah, online atau bersemuka.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#daftar" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20 transition">
                Mohon Tempat
              </a>
              <a href="#manfaat" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium ring-1 ring-white/20 transition">
                Lihat Manfaat
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wide text-blue-200/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl ring-1 ring-white/10 bg-slate-900/70 p-4">
              <img src="/quran-class.jpg" alt="Kelas Al-Quran" className="rounded-2xl w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
