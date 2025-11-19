function Benefits() {
  const items = [
    {
      title: 'Bimbingan Bertalaqqi',
      desc: 'Pembetulan sebutan huruf dan tajwid secara langsung oleh guru berpengalaman.'
    },
    {
      title: 'Sistem Modul Jelas',
      desc: 'Silibus langkah demi langkah, sesuai untuk dewasa bermula dari asas hingga lancar.'
    },
    {
      title: 'Masa Fleksibel',
      desc: 'Pilihan kelas pagi, petang atau malam – online atau bersemuka.'
    },
    {
      title: 'Komuniti Penyokong',
      desc: 'Sesi ulangkaji, rakaman, dan kumpulan sokongan untuk konsisten.'
    }
  ]

  return (
    <section id="manfaat" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Mengapa Pilih Program Ini?</h2>
        <p className="text-blue-200/80 mt-3 text-center max-w-2xl mx-auto">Fokus kami adalah hasil bacaan yang yakin, teratur dan beradab – sesuai untuk dewasa yang sibuk.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="text-lg font-semibold text-white">{it.title}</div>
              <p className="text-sm text-blue-200/80 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
