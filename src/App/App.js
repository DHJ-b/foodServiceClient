import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';

function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="App">
      <Header/>
      {page === 'home' ? <Home></Home> : ''}
      <Footer></Footer>
   </div>
  );
}

export default App;
