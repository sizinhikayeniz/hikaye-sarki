
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
      background: 'linear-gradient(to bottom right, #fbc2eb, #a6c1ee)',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Head>
        <title>Hikayeni Anlat, Şarkın Olsun</title>
        <meta name="description" content="Tanışma hikayeni paylaş, sana özel bir şarkı yapılsın!" />
      </Head>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d' }}>
        Hikayeni Anlat, Şarkın Olsun <span style={{ color: '#6a0dad' }}>🎵</span>
      </h1>

      <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
        Tanışma hikayenizi paylaşın, size özel bir şarkı yapayım.
      </p>

      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '500px',
        background: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }} name="hikayeForm" method="POST" data-netlify="true">
        <input name="ad" placeholder="Adınız" required />
        <input name="email" placeholder="E-posta" type="email" required />
        <textarea name="hikaye" placeholder="Tanışma hikayeniz" rows={4} required />
        <textarea name="ozel" placeholder="Şarkıda yer almasını istediğiniz özel bir şey var mı?" rows={2} />
        <button type="submit">Gönder</button>
      </form>

      <div style={{ marginTop: '40px' }}>
        <h3>🎧 Örnek Şarkı</h3>
        <audio controls style={{ width: '100%', maxWidth: '400px' }}>
          <source src="/sarki.mp3" type="audio/mpeg" />
          Tarayıcınız ses oynatmayı desteklemiyor.
        </audio>
      </div>
    </div>
  );
}
