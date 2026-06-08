// Vercel serverless function — proxies Torvik requests to avoid CORS
export default async function handler(req, res) {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { kw, year } = req.query;

  if (!kw) {
    res.status(400).json({ error: 'missing kw param' });
    return;
  }

  const torvikYear = year || '2026';
  const url = `https://barttorvik.com/playerstat.php?link=y&year=${torvikYear}&kw=${encodeURIComponent(kw)}&start=${torvikYear - 1}1101&end=${torvikYear}0501&json=1`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      res.status(response.status).json({ error: 'Torvik fetch failed' });
      return;
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
