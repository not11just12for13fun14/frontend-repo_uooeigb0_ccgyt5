import Hero from './components/Hero'
import Benefits from './components/Benefits'
import LeadForm from './components/LeadForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-semibold">QuranClass</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-blue-200">
            <a href="#manfaat" className="hover:text-white">Manfaat</a>
            <a href="#daftar" className="hover:text-white">Daftar</a>
            <a href="/test" className="hover:text-white">Ujian Sistem</a>
          </div>
          <a href="#daftar" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 transition">
            Mohon Tempat
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Benefits />
        <LeadForm />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-blue-300/70">
          © {new Date().getFullYear()} QuranClass. Semua hak cipta terpelihara.
        </div>
      </footer>
    </div>
  )
}

export default App
