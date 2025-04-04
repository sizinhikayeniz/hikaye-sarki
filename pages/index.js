
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hikayeni Anlat, Şarkın Olsun</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d2d2d', textAlign: 'center' }}>
          Hikayeni Anlat, Şarkın Olsun <span style={{ color: '#6a0dad' }}>🎵</span>
        </h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', textAlign: 'center' }}>
          Tanışma hikayenizi paylaşın, size özel bir şarkı yapayım.
        </p>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '500px',
          background: '#fff',
          padding: '30px',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
        }} name="hikayeForm" method="POST" data-netlify="true">
          <input name="ad" placeholder="Adınız" required style={inputStyle} />
          <input name="email" placeholder="E-posta" type="email" required style={inputStyle} />
          <textarea name="hikaye" placeholder="Tanışma hikayeniz" rows={4} required style={inputStyle} />
          <textarea name="ozel" placeholder="Şarkıda yer almasını istediğiniz özel bir şey var mı?" rows={2} style={inputStyle} />
          <button type="submit" style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#6a0dad',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: '0.3s'
          }}>Gönder</button>
        </form>
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <h3>🎧 Örnek Şarkı</h3>
          <audio controls style={{ width: '100%', maxWidth: '500px' }}>
            <source src="/sarki.mp3" type="audio/mpeg" />
            Tarayıcınız ses oynatmayı desteklemiyor.
          </audio>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};
