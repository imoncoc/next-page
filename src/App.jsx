import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App
