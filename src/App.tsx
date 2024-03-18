import { Outlet, useNavigate } from 'react-router-dom';
import './styles/index.css';
import { useEffect } from 'react';
import ReactLenis from '@studio-freight/react-lenis';

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
      naviagte('/home');
    }
  }, []);

  return (
    <ReactLenis root options={lenisOptions}>
      <Outlet />
    </ReactLenis>
  )
}

export default App
