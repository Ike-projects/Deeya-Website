import '@fontsource/heebo'; // Defaults to weight 400
import Header from './components/Layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import './App.css'
import InputApp from './components/InputApp';
import { useLocation } from 'react-router-dom';

function App() {
 const location = useLocation();
 const isAbsolute = ['/Deeya-Website/', '/Deeya-Website/marketplace', '/Deeya-Website/blog', '/Deeya-Website/aboutus', '/Deeya-Website/contactus'].includes(location.pathname)

  return (
    <>
      <Header isAbsolute={isAbsolute}/>
      <main className='min-h-screen'>
      <Outlet/>
      </main>
      {/* <InputApp/> */}
      <Footer/>
    </>
  )
}

export default App
