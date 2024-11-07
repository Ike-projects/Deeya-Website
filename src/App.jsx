import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fontsource/heebo'; // Defaults to weight 400
import Header from './components/Layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import './App.css'
import InputApp from './components/InputApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main className='min-h-screen'>
      <Outlet/>

      </main>
      {/* <InputApp/> */}
      <Footer/>
    </>
  )
}

export default App
