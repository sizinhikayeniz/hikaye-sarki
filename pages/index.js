
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hikayeni Anlat, Şarkın Olsun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#fff'
      }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
          🎵 Hikayeni Anlat, Şarkın Olsun
        </h1>

        <form style={{
          width: '100%',
          maxWidth: '500px',
          background: '#ffffff20',
          backdropFilter: 'blur(10px)',
          padding: '1.5rem',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }} name="hikayeForm" method="POST" data-netlify="true">
          <input name="ad" placeholder="Adınız" required style={inputStyle} />
          <input name="email" placeholder="E-posta" type="email" required style={inputStyle} />
          <textarea name="hikaye" placeholder="Tanışma hikayeniz" rows={4} required style={inputStyle} />
          <textarea name="ozel" placeholder="Şarkıda geçmesini istediğiniz özel bir şey var mı?" rows={2} style={inputStyle} />
          <button type="submit" style={{
            padding: '1rem',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#ff6f91',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Gönder
          </button>
        </form>

        <div style={{ marginTop: '3rem', width: '100%', textAlign: 'center' }}>
          <h2>🎧 Örnek Şarkı</h2>
          <audio controls style={{ width: '100%', maxWidth: '500px', marginTop: '1rem' }}>
            <source src="/sarki.mp3" type="audio/mpeg" />
            Tarayıcınız bu ses öğesini desteklemiyor.
          </audio>
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  padding: '0.8rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  width: '100%'
};
