import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Article />
      <Showcase />
      <Footer/>
    </div>
  );
}

export default App;
