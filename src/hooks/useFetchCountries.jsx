import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchCountries() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);
  return { countries, loading, error };
};
