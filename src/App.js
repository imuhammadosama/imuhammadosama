import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Empty from './pages/Empty/Empty';
import Home from './pages/Home';
import Blogs from './pages/Blogs/Blogs';
import Blog from './pages/Blogs/Blog/Blog';
import About from './pages/About/About';
import Resources from './pages/Resources/Resources';
import Files from './pages/Files/Files';
import Contact from './pages/Contact/Contact';
import Upload from './pages/Upload/Upload';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blog' element={<Blogs />} />
        <Route exact path='/blog/:id' element={<Blog />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/resources' element={<Resources />} />
        <Route exact path='/files' element={<Files />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/upload' element={<Upload />} />
        <Route path='*' element={<Empty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
