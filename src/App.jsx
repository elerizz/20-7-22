import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './App.css';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;