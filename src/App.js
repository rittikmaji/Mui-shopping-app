import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Header/Footer/Footer';
import Home from './Components/HomePage/Home';
import ProductList from './Components/Product/ProductList';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Components/About/About';

function App() {
  return (
    <div className='home'>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/about' element={<About/>}/>
    
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
