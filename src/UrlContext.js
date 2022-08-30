import { createContext, useState } from 'react';

const UrlContext = createContext();

export function UrlProvider({ children }) {
  const urlString = 'https://api.shrtco.de/v2/shorten?url=';
  const [userInput, setUserInput] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput === '') {
      return;
    }
    try {
      const response = await fetch(`${urlString}${userInput}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setUrl(userInput);
      setData((prev) => [...prev, data]);
      console.log(data);
      setUserInput('');
    } catch (error) {
      if (error) {
        console.log(error.name);
      }
    }
  };

  // console.log(data.code);
  return (
    <UrlContext.Provider
      value={{ userInput, setUserInput, handleSubmit, url, data }}
    >
      {children}
    </UrlContext.Provider>
  );
}

export default UrlContext;
