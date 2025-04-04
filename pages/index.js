
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    story: '',
    specialNotes: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hikayen başarıyla gönderildi! En kısa sürede sana dönüş yapılacak.');
    setForm({ name: '', email: '', story: '', specialNotes: '' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>🎵 Hikayeni Anlat, Şarkın Olsun 🎶</h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto' }}>
        Tanışma hikayenizi paylaşın, sizin için özel bir şarkı yapayım.
      </p>
      <div style={{ maxWidth: '600px', margin: '2rem auto', background: '#fff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Adınız'
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <input
            type='email'
            name='email'
            placeholder='E-posta adresiniz'
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <textarea
            name='story'
            placeholder='Tanışma hikayenizi yazın...'
            rows='5'
            value={form.story}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <textarea
            name='specialNotes'
            placeholder='Şarkıda geçmesini istediğiniz özel bir şey var mı?'
            rows='3'
            value={form.specialNotes}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <button type='submit' style={{
            width: '100%',
            backgroundColor: '#ff6f91',
            color: '#fff',
            padding: '1rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>Gönder</button>
        </form>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2>🎧 Örnek Şarkı</h2>
        <audio controls>
          <source src='/sarki.mp3' type='audio/mpeg' />
          Tarayıcınız bu ses öğesini desteklemiyor.
        </audio>
      </div>
    </div>
  );
}
