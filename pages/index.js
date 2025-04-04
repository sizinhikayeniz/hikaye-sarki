
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    story: "",
    specialNotes: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hikayen başarıyla gönderildi!");
    setForm({ name: "", email: "", story: "", specialNotes: "" });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Hikayeni Anlat, Şarkın Olsun 🎵</h1>
      <p>Tanışma hikayenizi paylaşın, size özel bir şarkı yapayım.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          value={form.name}
          onChange={handleChange}
          required
        /><br/><br/>
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={form.email}
          onChange={handleChange}
          required
        /><br/><br/>
        <textarea
          name="story"
          placeholder="Tanışma hikayeniz"
          value={form.story}
          onChange={handleChange}
          rows={5}
          required
        /><br/><br/>
        <textarea
          name="specialNotes"
          placeholder="Şarkıda yer almasını istediğiniz özel bir şey var mı?"
          value={form.specialNotes}
          onChange={handleChange}
          rows={3}
        /><br/><br/>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}
