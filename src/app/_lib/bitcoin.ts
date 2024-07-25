import type { NextApiRequest, NextApiResponse } from 'next';

let cachedData: { price: number; lastUpdated: number } | null = null;
const CACHE_DURATION = 120 * 1000; // 60 seconds

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (cachedData && Date.now() - cachedData.lastUpdated < CACHE_DURATION) {
    return res.status(200).json(cachedData);
  }

  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    
    cachedData = {
      price: data.bitcoin.usd,
      lastUpdated: Date.now()
    };

    res.status(200).json(cachedData);
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    res.status(500).json({ error: 'Failed to fetch Bitcoin price' });
  }
}