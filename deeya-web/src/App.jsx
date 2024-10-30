

import '@fontsource/heebo'; // Defaults to weight 400
import Header from './components/Layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import './App.css'
import InputApp from './components/InputApp';

function App() {
 

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
