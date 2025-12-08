export default async function handler(req, res) {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: "No video URL provided" });
  }

  try {
    const apiKey = process.env.YT_API_KEY;

    const videoId = videoUrl.split("v=")[1].split("&")[0];

    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({
      error: "Analysis failed",
      details: error.message,
    });
  }
}
