import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <MainLayout>
        <Home />
        <About />
        <Team />
        <Gallery />
        <Contact />
      </MainLayout>
    </Router>
  );
}

export default App;
