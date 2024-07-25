import { sanSerif } from '@/app/_lib/font';
import { useState, useEffect } from 'react';

const BitcoinPrice = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch('/api/bitcoin-price');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setPrice(data.price);
        setLastUpdated(new Date(data.lastUpdated).toLocaleTimeString());
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Bitcoin price');
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
    const interval = setInterval(fetchBitcoinPrice, 60000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return (
    <div className={"text-white rounded-lg p-6 max-w-sm "+sanSerif.className }>
      <div className="text-center text-red-500">{error}</div>;
    </div>
  );

  return (
    <div className={"text-white rounded-lg p-6 max-w-sm "+sanSerif.className }>
      <h2 className="text-2xl font-bold mb-4">Bitcoin Price</h2>
      <p className="text-4xl font-semibold text-green-400">${price?.toLocaleString()}</p>
      <p className="text-sm text-gray-300 mt-2">Last updated: {lastUpdated}</p>
    </div>
  );
};

export default BitcoinPrice;