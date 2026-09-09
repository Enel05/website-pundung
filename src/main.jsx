import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, ExternalLink, History, MapPin, Menu, Sprout, Users, X } from 'lucide-react'
import './style.css'

const destinations = [
  {
    name: 'Lomba Tahunan', region: 'Pundung, Girikarto, Panggang, Gunungkidul, Daerah Istimewa Yogyakarta', title: 'Pertandingan Voli Antar Padukuhan Tiap Tahun',
    video: '/images/VID_20260811_211058.mp4',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pundung%2C%20Girikarto%2C%20Panggang%2C%20Gunungkidul%2C%20Daerah%20Istimewa%20Y ogyakarta%2C%20Indonesia',
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

const saranaItems = [
  {
    name: 'Sarana Budaya',
    title: 'Sarana Budaya',
    description: 'Sarana budaya untuk memperkuat tradisi, kebersamaan, dan nilai luhur masyarakat dusun.',
    image: encodeURI('/images/Sarana Budaya.jpeg'),
  },
  {
    name: 'Sarana Ibadah Vihara',
    title: 'Sarana Ibadah Vihara',
    description: 'Sarana ibadah vihara sebagai pusat kegiatan spiritual dan kebersamaan umat.',
    image: encodeURI('/images/Sarana Ibadah Vihara.jpeg'),
  },
  {
    name: 'Sarana Ibadah',
    title: 'Sarana Ibadah',
    description: 'Sarana ibadah untuk mendukung aktivitas keagamaan dan pembinaan spiritual warga.',
    image: encodeURI('/images/Sarana Ibadah.jpeg'),
  },
  {
    name: 'Sarana Keamanan',
    title: 'Sarana Keamanan',
    description: 'Sarana keamanan menjaga ketenteraman, keteraturan, dan rasa aman dalam lingkungan padukuhan.',
    image: encodeURI('/images/Sarana Keamanan.jpeg'),
  },
  {
    name: 'Sarana Olahraga',
    title: 'Sarana Olahraga',
    description: 'Sarana olahraga sebagai wahana aktifitas fisik, kebugaran, dan lomba antar warga.',
    image: encodeURI('/images/Sarana Olahraga.jpeg'),
  },
  {
    name: 'Sarana Pemerintahan',
    title: 'Sarana Pemerintahan',
    description: 'Sarana pemerintahan untuk pelayanan administratif dan koordinasi kegiatan padukuhan.',
    image: encodeURI('/images/Sarana Pemerintahan.jpeg'),
  },
  {
    name: 'Sarana Perdagangan',
    title: 'Sarana Perdagangan',
    description: 'Sarana perdagangan mendukung transaksi, ekonomi lokal, dan akses kebutuhan harian warga.',
    image: encodeURI('/images/Sarana Perdagangan.jpeg'),
  },
  {
    name: 'Sarana Pertanian',
    title: 'Sarana Pertanian',
    description: 'Sarana pertanian menunjang kegiatan bercocok tanam, pengelolaan lahan, dan hasil panen.',
    image: encodeURI('/images/Sarana Pertanian.jpeg'),
  },
  {
    name: 'Sarana Peternakan',
    title: 'Sarana Peternakan',
    description: 'Sarana peternakan mendukung usaha ternak dan pengelolaan sumber daya lokal.',
    image: encodeURI('/images/Sarana Peternakan.jpeg'),
  },
  {
    name: 'Sarana UMKM',
    title: 'Sarana UMKM',
    description: 'Sarana UMKM sebagai ruang pengembangan usaha kecil, kreativitas, dan ekonomi kreatif warga.',
    image: encodeURI('/images/Sarana UMKM.jpeg'),
  },
  {
    name: 'Infrastruktur Balai',
    title: 'Infrastruktur Balai',
    description: 'Infrastruktur balai dusun sebagai ruang pertemuan, musyawarah, dan pelayanan komunitas.',
    image: encodeURI('/images/Infrastruktur Balai.jpeg'),
  },
  {
    name: 'Infrastruktur Jalan',
    title: 'Infrastruktur Jalan',
    description: 'Infrastruktur jalan untuk konektivitas, distribusi, dan mobilitas warga padukuhan.',
    image: encodeURI('/images/Infrastruktur Jalan.jpeg'),
  },
  {
    name: 'Infrastruktur Tiang Listrik',
    title: 'Infrastruktur Tiang Listrik',
    description: 'Infrastruktur tiang listrik mendukung penerangan, pelayanan publik, dan aktivitas warga.',
    image: encodeURI('/images/Infrastruktur Tiang Listrik.jpeg'),
  },
]

const mapLocation = 'Pundung, Girikarto, Panggang, Gunungkidul, Daerah Istimewa Yogyakarta, Indonesia'
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation)}`

function App() {
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [saranaActive, setSaranaActive] = useState(0)
  const move = (direction) => setActive((current) => (current + direction + destinations.length) % destinations.length)
  const moveSarana = (direction) => {
    setSaranaActive((current) => (current + direction + saranaItems.length) % saranaItems.length)
  }

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
          <a href="#sarana-infrastruktur" onClick={() => setMenuOpen(false)}>SARANA &amp; INFRASTRUKTUR</a>
          <a href="#organisasi" onClick={() => setMenuOpen(false)}>ORGANISASI</a>
          <a href="#potensi-dukuh" onClick={() => setMenuOpen(false)}>POTENSI DUKUH</a>
          <a href={encodeURI('/images/Buku Profil Padukuhan.pdf')} download="Buku-Profil-Padukuhan-Pundung.pdf" onClick={() => setMenuOpen(false)}>DOWNLOAD BUKU PROFIL</a>
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

      <section className="organization-section" id="organisasi">
        <div className="organization-wrap">
          <div className="section-kicker"><Users size={17} /> Lembaga Padukuhan</div>
          <h2>Struktur Organisasi dan Lembaga<br /><em>Padukuhan Pundung</em></h2>
          <div className="organization-frame">
            <img src={encodeURI('/images/Struktur Pundung.jpeg')} alt="Struktur Organisasi Lembaga Padukuhan Pundung" />
          </div>
        </div>
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
        <div className="history-content">
          <div className="history-lead">
            <p>Padukuhan Pundung memiliki sejarah yang berkaitan erat dengan perkembangan wilayah Kalurahan Girikarto. Berdasarkan cerita yang diwariskan oleh para tetua, wilayah Pundung dahulu dikaitkan dengan seorang tokoh yang dikenal sebagai Mbah Tamansari, yang dipercaya sebagai salah satu orang yang lebih dahulu mendiami wilayah tersebut.</p>
            <p>Mbah Tamansari memiliki anak bernama Durjono dan seorang anak perempuan bernama Surti yang kemudian menikah dengan Dipojoyosari. Kisah mengenai Mbah Tamansari menjadi salah satu bagian dari cerita masyarakat mengenai awal keberadaan permukiman di wilayah Pundung.</p>
          </div>
          <div className="history-body">
            <p>Asal-usul nama Pundung berkaitan dengan proses babad alas atau pembukaan wilayah. Dalam cerita masyarakat, ketika dilakukan pembukaan lahan, ditemukan sebuah gundukan besar yang dipercaya sebagai rumah rayap purba. Gundukan tersebut memiliki ukuran yang tidak biasa sehingga kemudian dianggap sebagai tempat yang memiliki nilai khusus dan dikeramatkan oleh masyarakat atau para tetua setempat.</p>
            <p>Keberadaan gundukan tersebut kemudian menjadi salah satu penanda wilayah. Istilah “pundung” sendiri berkaitan dengan sebutan untuk gundukan atau rumah rayap berukuran besar, sehingga dipercaya menjadi asal mula penggunaan nama Pundung.</p>
            <p>Dalam perkembangannya, wilayah tersebut disebut pernah mengalami perubahan nama, yaitu dari Sidarejo, kemudian Pundung Sari, hingga akhirnya dikenal sebagai Pundung. Perubahan nama tersebut menunjukkan adanya perkembangan wilayah dan permukiman dari masa ke masa. Pundung kemudian berkembang menjadi salah satu padukuhan yang berada di wilayah Kalurahan Girikarto.</p>
            <p>Meskipun demikian, hubungan kronologis antara Mbah Tamansari, perubahan nama Sidarejo dan Pundung Sari, serta terbentuknya Pundung sebagai bagian dari Girikarto masih memerlukan penelusuran lebih lanjut melalui sumber sejarah lokal dan keterangan dari tokoh masyarakat setempat.</p>
            <p>Dengan demikian, sejarah Padukuhan Pundung tidak terlepas dari proses pembukaan wilayah, perkembangan permukiman, serta pembentukan wilayah Kalurahan Girikarto. Cerita mengenai Mbah Tamansari dan ditemukannya gundukan besar dalam proses babad alas menjadi bagian penting dari sejarah lisan yang masih diwariskan oleh masyarakat hingga saat ini.</p>
          </div>
        </div>
      </section>

      <section className="sarana-section" id="sarana-infrastruktur">
        <div className="section-kicker"><Building2 size={17} /> Sarana dan Infrastruktur</div>
        <h2>Ruang layanan warga,<br /><em>untuk tumbuh bersama.</em></h2>
        <div className="sarana-carousel">
          <button className="sarana-arrow left" onClick={() => moveSarana(-1)} aria-label="Sarana sebelumnya"><ArrowLeft size={20} /></button>
          <div className="sarana-window">
            <div className="sarana-track" style={{ transform: `translateX(-${saranaActive * 100}%)` }}>
              {saranaItems.map((item) => (
                <article className="sarana-slide" key={item.name}>
                  <div className="sarana-image" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="sarana-content">
                    <span className="sarana-category">{item.name}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button className="sarana-arrow right" onClick={() => moveSarana(1)} aria-label="Sarana berikutnya"><ArrowRight size={20} /></button>
        </div>
        <div className="sarana-dots">
          {saranaItems.map((item, index) => (
            <button key={item.name} className={index === saranaActive ? 'active' : ''} onClick={() => setSaranaActive(index)} aria-label={`Pilih ${item.name}`} />
          ))}
        </div>
      </section>

      <section className="potential-section" id="potensi-dukuh">
        <div className="potential-layout">
          <div className="potential-content">
            <div className="section-kicker light"><Sprout size={17} /> Potensi Dukuh</div>
            <h2>Pundung punya<br /><em>banyak kemungkinan.</em></h2>
            <p className="potential-copy">Dari pertanian, peternakan, olahraga, hingga usaha kreatif, potensi Pundung tumbuh dari warga yang mau menjaga dusun dan mengembangkannya bersama.</p>
            <div className="potential-feature">
              <span className="feature-label">Wisata Unggulan</span>
              <h3>Goa Meteor</h3>
              <p>Wisata alam yang menjadi potensi budaya dan pariwisata dusun Pundung.</p>
            </div>
            <a href="#lokasi" className="outline-link">Jelajahi Pundung <ArrowUpRight size={17} /></a>
          </div>
          <div className="potential-image-wrap">
            <div className="potential-image" style={{ backgroundImage: `url(${encodeURI('/images/Goa Meteor.jpeg')})` }}>
              <span className="potential-image-label">Goa Meteor</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
