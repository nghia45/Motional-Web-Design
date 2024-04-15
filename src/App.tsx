import { Outlet, useNavigate } from 'react-router-dom';
import './styles/index.css';
import { useEffect } from 'react';
import ReactLenis from '@studio-freight/react-lenis';
import Header from './layout/Header';
import Footer from './layout/Footer';

const lenisOptions = {
  lerp: 0.1,
  duration: 4,
  smoothTouch: false, //smooth scroll for touch devices
  smooth: true,
};

function App() {
  const naviagte = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
      naviagte('/login');
    } else {
      naviagte('/home/my-works');
    }
  }, []);

  return (
    <ReactLenis root options={lenisOptions}>
      <Header />
      <Outlet />
      <Footer />
    </ReactLenis>
  )
}

export default App
