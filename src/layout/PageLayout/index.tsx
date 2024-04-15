import Header from "../Header"
import Footer from "../Footer"
import './index.css'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar"

type Props = {}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = ({ }: Props) => {

  const location = useLocation();

  useGSAP(() => {

    const sections = document.querySelectorAll('.section__container');

    sections.forEach((section) => {
      const sectionLeft = section.querySelector('.section__left');
      const sectionRight = section.querySelector('.section__right');
      const sectionBottom = section.querySelector('.section__bottom');

      // gsap.set(sectionLeft, { xPercent: -100, opacity: 0 });
      // gsap.set(sectionRight, { xPercent: 100, opacity: 0 });

      // gsap.to(sectionLeft, {
      //   scrollTrigger: {
      //     trigger: sectionLeft,
      //     start: 'top bottom',
      //     end: 'bottom 80%',
      //     scrub: true,
      //   },
      //   xPercent: 0,
      //   opacity: 1,
      // });
      // gsap.to(sectionRight, {
      //   scrollTrigger: {
      //     trigger: sectionRight,
      //     start: 'top bottom',
      //     end: 'bottom 80%',
      //     scrub: true,
      //   },
      //   xPercent: 0,
      //   opacity: 1,
      // });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom 80%',
          scrub: true,
        }
      });

      tl.fromTo(sectionLeft, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 });
      tl.fromTo(sectionRight, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, "<");
      tl.fromTo(sectionBottom, { yPercent: 60, opacity: 0.5 }, { yPercent: 0, opacity: 1 }, "<");

    });
  });

  return (
    <div className="home__container snap-y scroll-smooth flex flex-col">
l    {location.pathname === '/home/my-works' ? <Header /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home