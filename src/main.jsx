import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, ExternalLink, History, MapPin, Menu, Sprout, Store, X } from 'lucide-react'
import './style.css'

const destinations = [
  {
    name: 'Lomba Tahunan', region: 'Pundung, Girikarto, Panggang, Gunungkidul, Daerah Istimewa Yogyakarta', title: 'Pertandingan Voli Antar Padukuhan Tiap Tahun',
    video: '/images/VID_20260811_211058.mp4',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pundung%2C%20Girikarto%2C%20Panggang%2C%20Gunungkidul%2C%20Daerah%20Istimewa%20Yogyakarta%2C%20Indonesia',
  },
  {
    name: 'Peternakan', region: 'Pundung, Girikarto, Panggang, Gunungkidul, Daerah Istimewa Yogyakarta', title: 'Peternakan berbagai hewan di pundung',
    video: '/images/VID_20260813_135056.mp4',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=85', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pundung%2C%20Girikarto%2C%20Panggang%2C%20Gunungkidul%2C%20Daerah%20Istimewa%20Yogyakarta%2C%20Indonesia',
  },
  {
    name: 'Canting', region: 'Pundung, Girikarto, Panggang, Gunungkidul, Daerah Istimewa Yogyakarta', title: 'Distributor Canting Terbesar Di Gunungkidul',
    video: '/images/VID_20260813_143156.mp4',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pundung%2C%20Girikarto%2C%20Panggang%2C%20Gunungkidul%2C%20Daerah%20Istimewa%20Yogyakarta%2C%20Indonesia',
  },
]

const mapLocation = 'Pundung, Girikarto, Panggang, Gunungkidul, Daerah Istimewa Yogyakarta, Indonesia'
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation)}`

function App() {
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const move = (direction) => setActive((current) => (current + direction + destinations.length) % destinations.length)

  useEffect(() => {
    const slideTimer = setInterval(() => move(1), 10000)
    return () => clearInterval(slideTimer)
  }, [])

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#potensi-dukuh" aria-label="Dusun Pundung">
          <span>Jejak Pundung</span>
          <small>Girikarto<br /><b>indonesia</b> <i>✳</i></small>
        </a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Navigasi utama">
          <a href="#sejarah" onClick={() => setMenuOpen(false)}>SEJARAH</a>
          <a href="#lokasi" onClick={() => setMenuOpen(false)}>LOKASI</a>
          <a href="#kegiatan" onClick={() => setMenuOpen(false)}>KEGIATAN</a>
          <a href="#umkm" onClick={() => setMenuOpen(false)}>UMKM</a>
          <a href="#potensi-dukuh" onClick={() => setMenuOpen(false)}>POTENSI DUKUH</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>
      <button className={`menu-backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} aria-label="Tutup menu" tabIndex={menuOpen ? 0 : -1} />

      <section className="hero" id="beranda">
        <div className="hero-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {destinations.map((destination) => (
            <article className="hero-slide" key={destination.name}>
              <video autoPlay muted loop playsInline preload="auto" src={destination.video} aria-label={`Video ${destination.name} di Dusun Pundung`} />
              <div className="hero-shade" />
              <div className="hero-copy"><p className="eyebrow">Profil Dusun Pundung, Girikarto</p><h1>Dusun Pundung</h1><p className="hero-destination">{destination.title}</p></div>
              <div className="place-label"><span>{destination.region}</span><strong>{destination.name}</strong><a href={destination.mapsUrl} target="_blank" rel="noreferrer">Lihat di Google Maps <ExternalLink size={15} /></a></div>
            </article>
          ))}
        </div>
        <button className="slide-arrow left" onClick={() => move(-1)} aria-label="Destinasi sebelumnya"><ArrowLeft size={20} /></button>
        <button className="slide-arrow right" onClick={() => move(1)} aria-label="Destinasi berikutnya"><ArrowRight size={20} /></button>
        <div className="hero-progress" aria-label="Posisi carousel">{destinations.map((item, index) => <button key={item.name} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Pilih ${item.name}`} />)}</div>
      </section>

      <section className="discovery" id="lokasi">
        <div className="section-kicker"><MapPin size={17} /> Lokasi Dusun</div>
        <h2>Kenali Pundung<br /><em>lebih dekat.</em></h2>
        <p className="intro">Dusun Pundung berada di Kalurahan Girikarto, Kapanewon Panggang, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta.</p>
        <div className="map-panel"><iframe title="Lokasi Pundung, Girikarto di Google Maps" src={`https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-details"><span>Lokasi pilihan</span><strong>Pundung, Girikarto</strong><a className="map-link" href={mapUrl} target="_blank" rel="noreferrer">Buka Google Maps <ExternalLink size={16} /></a></div></div>
      </section>

      <section className="history-section" id="sejarah">
        <div className="section-kicker"><History size={17} /> Sejarah Pundung</div>
        <h2>Dari cerita warga,<br /><em>tumbuh jadi identitas.</em></h2>
        <div className="history-content"><p>Dusun Pundung adalah bagian dari Kalurahan Girikarto yang hidup dari gotong royong, tradisi, dan hubungan dekat antarwarga. Setiap sudut dusun menyimpan cerita tentang keluarga, ladang, dan kegiatan bersama.</p><p>Halaman ini menjadi ruang untuk mengenalkan Pundung kepada siapa saja yang ingin melihat potensi, kegiatan, serta karya warga secara lebih dekat.</p></div>
      </section>

      <section className="spotlight" id="kegiatan">
        <div className="spotlight-heading"><div><div className="section-kicker light"><CalendarDays size={17} /> Kegiatan Warga</div><h2>Bergerak bersama,<br /><em>merawat kebersamaan.</em></h2></div></div>
        <div className="story-grid"><article className="story story-large" style={{ backgroundImage: `url(${destinations[0].image})` }}><span>Agenda tahunan</span><h3>Voli antar padukuhan</h3><p>Ruang bertemu dan berkompetisi yang selalu dinantikan warga Pundung.</p></article><article className="story story-small" style={{ backgroundImage: `url(${destinations[1].image})` }}><span>Kegiatan harian</span><h3>Peternakan warga</h3><p>Potensi ternak yang tumbuh dari ketekunan dan pengetahuan lokal.</p></article></div>
      </section>

      <section className="umkm-section" id="umkm">
        <div className="section-kicker"><Store size={17} /> UMKM Pundung</div>
        <h2>Karya lokal,<br /><em>bernilai untuk semua.</em></h2>
        <div className="umkm-grid"><article><strong>01</strong><h3>Produk canting</h3><p>Keterampilan dan distribusi canting menjadi salah satu karya usaha yang berkembang di Pundung.</p></article><article><strong>02</strong><h3>Usaha rumahan</h3><p>Produk olahan dan kerajinan warga hadir dari rumah, dikerjakan dengan teliti dan penuh cerita.</p></article><article><strong>03</strong><h3>Ruang kolaborasi</h3><p>Dukung UMKM Pundung dengan mengenal, mengunjungi, dan membagikan karya mereka.</p></article></div>
      </section>

      <section className="potential-section" id="potensi-dukuh">
        <div className="section-kicker light"><Sprout size={17} /> Potensi Dukuh</div>
        <h2>Pundung punya<br /><em>banyak kemungkinan.</em></h2>
        <p className="potential-copy">Dari pertanian, peternakan, olahraga, hingga usaha kreatif, potensi Pundung tumbuh dari warga yang mau menjaga dusun dan mengembangkannya bersama.</p>
        <a href="#lokasi" className="outline-link">Jelajahi Pundung <ArrowUpRight size={17} /></a>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
