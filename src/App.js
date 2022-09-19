import './App.css';
import Navbar from 'components/common/Navbar';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import CardSection from 'components/CardSection';
import { UrlProvider } from 'UrlContext';
import Boost from 'components/Boost';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <UrlProvider>
          <Hero />
          <CardSection />
        </UrlProvider>
      </main>
      <Boost />
      <Footer />
    </div>
  );
}

export default App;

