import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Empty from './pages/Empty/Empty';
import Home from './pages/Home';
import About from './pages/About/About';
import Resources from './pages/Resources/Resources';
import Files from './pages/Resources/Files/Files';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/resources' element={<Resources />} />
        <Route exact path='/files' element={<Files />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<Empty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
