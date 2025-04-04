// pages/api/submit.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, story, specialRequest } = req.body;

    // Basit bir işlem örneği
    console.log("Form gönderildi:", { name, email, story, specialRequest });

    res.status(200).json({ message: 'Form başarıyla gönderildi' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
