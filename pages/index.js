import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
      backgroundImage: 'url("/bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <Head>
        <title>Hikayeni Anlat, Şarkın Olsun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{
        backgroundColor: 'rgba(255,255,255,0.85)',
        padding: '2rem',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center' }}>🎵 Hikayeni Anlat, Şarkın Olsun</h1>

        <form action="https://formsubmit.co/seninmail@adresin.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="hidden" name="_captcha" value="false" />
         <input type="hidden" name="_subject" value="Yeni Form Mesajı!" />
         <input type="hidden" name="_template" value="table" />
          <input name="name" placeholder="Adınız" required style={inputStyle} />
          <input name="email" type="email" placeholder="E-posta" required style={inputStyle} />
          <textarea name="story" placeholder="Tanışma hikayeniz" rows="4" required style={inputStyle}></textarea>
          <textarea name="extra" placeholder="Şarkıda geçmesini istediğiniz özel bir şey var mı?" rows="2" style={inputStyle}></textarea>
          <button type="submit" style={{
            padding: '0.8rem',
            backgroundColor: '#ff6584',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Gönder</button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3>🎧 Örnek Şarkı</h3>
          <audio controls style={{ width: '100%' }}>
            <source src="/Kaderincilvesi.mp3" type="audio/mpeg" />
            Tarayıcınız ses oynatmayı desteklemiyor.
          </audio>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '0.6rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  width: '100%',
  boxSizing: 'border-box'
};
