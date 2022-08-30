import { useState, useEffect } from 'react';

export const useFetch = (url, method = 'GET') => {
  const [data, setData] = useState([]); // state to store data
  const [isPending, setIsPending] = useState(false); // loading state
  const [error, setError] = useState([]); // error state

  useEffect(() => {
    // * Create an abort controller for clean up
    const controller = new AbortController();
    // * Function To Fetch Data, that takes a url as a parameter
    const fetchData = async (fetchOptions) => {
      setIsPending(true);
      try {
        //
        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        const { result } = data;
        setIsPending(false);
        setData(result.short_link);
        setError(null);
      } catch (error) {
        if (error.name === 'AbortError') {
        } else {
          setIsPending(false);
          setError(error.name);
        }
      }
    };
    // * Do not forget to call the fetchData function after it's been created
    if (method === 'GET') {
      fetchData();
    }
    // * Clean up function
    return () => {
      controller.abort();
    };
  }, [method, url]);

  // * Custom hooks always return something
  return { data, isPending, error };
};
