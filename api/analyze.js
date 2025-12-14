export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST 요청만 허용됩니다." });
  }

  const { keyword, dateRange, videoLength, minViews, limit } = req.body || {};

  if (!keyword) {
    return res.status(400).json({ error: "keyword is required" });
  }

  // ⚠️ 현재는 실제 YouTube API 대신 '구조 테스트용 더미 분석 결과'
  // 다음 단계에서 YouTube Data API로 교체 예정

  const mockResults = Array.from({ length: limit || 5 }).map((_, i) => ({
    rank: i + 1,
    title: `${keyword} 관련 인기 영상 ${i + 1}`,
    views: Math.floor(Math.random() * 500000) + minViews,
    uploaded: `${dateRange} 기준`,
    length: videoLength,
    insight: "쇼츠/감정 트리거 반응 우수"
  }));

  return res.status(200).json({
    ok: true,
    keyword,
    filters: {
      dateRange,
      videoLength,
      minViews,
      limit
    },
    results: mockResults
  });
}
