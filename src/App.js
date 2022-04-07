// Hooks
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Components
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import ProductDetail from './Views/ProductDetail/ProductDetail';


// Context


// Views
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';
import Error from './Views/Error/Error';
import Carrito from './Views/Carrito/Carrito';




// Styles



const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='/Carrito' element={<Carrito />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
