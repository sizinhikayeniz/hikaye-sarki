
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url("/bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <Head>
        <title>Hikayeni Anlat, Şarkın Olsun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <h1 style={{
        fontSize: '2rem',
        color: '#fff',
        marginBottom: '1rem',
        textShadow: '1px 1px 6px rgba(0,0,0,0.7)'
      }}>
        🎵 Hikayeni Anlat, Şarkın Olsun
      </h1>

      <form name="contact" method="POST" data-netlify="true"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '24px',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" placeholder="Adınız" required style={inputStyle} />
        <input name="email" type="email" placeholder="E-posta" required style={inputStyle} />
        <textarea name="story" placeholder="Tanışma hikayeniz" rows="3" required style={inputStyle}></textarea>
        <textarea name="extra" placeholder="Şarkıda geçmesini istediğiniz özel bir şey?" rows="2" style={inputStyle}></textarea>
        <button type="submit" style={{
          padding: '10px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#ff6584',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '15px',
          cursor: 'pointer'
        }}>Gönder</button>
      </form>

      <div style={{
        marginTop: '30px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        padding: '16px',
        width: '100%',
        maxWidth: '400px',
        color: 'white',
        textAlign: 'center',
        backdropFilter: 'blur(5px)'
      }}>
        <h3>🎧 Örnek Şarkı</h3>
        <audio controls style={{ width: '100%' }}>
          <source src="/Kaderincilvesi.mp3" type="audio/mpeg" />
          Tarayıcınız ses çalmayı desteklemiyor.
        </audio>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  fontSize: '14px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  width: '100%',
  resize: 'vertical'
};
