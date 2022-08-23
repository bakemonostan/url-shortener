import { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import './App.css';
import Navbar from 'components/common/Navbar';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import CardSection from 'components/CardSection';

function App() {
  const [shortLink, setShortLink] = useState([]);

  const url =
    'https://api.shrtco.de/v2/shorten?url=https://styled-components.com/docs/basics';
  const { data, isPending, error } = useFetch(url);
  const { short_link } = data;
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <CardSection />
        {isPending && <p>Loading</p>}
        <a href='/'>{data && <p>{short_link}</p>}</a>
      </main>
      <Footer />
    </div>
  );
}

export default App;

