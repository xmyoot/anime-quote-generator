import { useState, useEffect } from 'react';
export type AnimeData = {
  id: number;
  quote: string;
  anime: string;
  character: string;
};
export default function useAnimeData() {
  const [data, setData] = useState<AnimeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://animechan.xyz/api/random')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.statusText);
        }
      })
      .then((quote) => {
        setData(quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
