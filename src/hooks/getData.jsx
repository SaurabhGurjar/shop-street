import { useState, useEffect } from 'react';

export function useFetch(subUrl) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await (
          await fetch(`https://fakestoreapi.com/${subUrl}`)
        ).json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, [subUrl]);
  return [data, error];
}

export function useCategory(name) {
  const url = `products/category/${name}`;
  return useFetch(url);
}

export function useCategories() {
  return useFetch('products/categories');
}

export async function useProducts() {
 const data = await Promise.all([
    useFetch("products/category/men's clothing"),
    useFetch("products/category/women's clothing"),
  ]);
  return data;

}

export function useProduct(id) {
  return useFetch(`products/${id}`);
}
