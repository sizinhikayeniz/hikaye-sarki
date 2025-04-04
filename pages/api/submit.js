export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, story, extra } = req.body;

    console.log("Form verisi alındı:", { name, email, story, extra });

    res.status(200).json({ message: "Mesaj başarıyla gönderildi!" });
  } else {
    res.status(405).json({ message: "Sadece POST isteklerine izin verilir." });
  }
}
