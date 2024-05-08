import { useEffect, useState } from 'react';
import { Product } from './../interfaces/geral';
export const useFetchDb = (url: string) => {
  const [data, setData] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [url]);

  return { data };
};
