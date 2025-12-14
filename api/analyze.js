export default function handler(req, res) {
  res.status(200).json({ ok: true, message: "API 연결 성공" });
}
