import Header from "../../layout/Header"
import Footer from "../../layout/Footer"
import StrokeText from "../../components/StokeText"
import MagneticButton from "../../components/MagneticButton"
import './index.css'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import GoldFever from "../../assets/images/goldfever.png"

type Props = {}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = ({ }: Props) => {

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
      tl.fromTo(sectionBottom, { yPercent: 50, opacity: 0.5 }, { yPercent: 0, opacity: 1 }, "<");

    });
  });

  return (
    <div className="home__container">
      <Header />
      <div className="section__container flex justify-between">
        <div className="section__left text-left" style={{ width: '30%' }}>
          <p>Hi, I'm Finn Nguyen, a frontend developer seeking to learn advanced html and css along side with mastering frontend technologies</p>
        </div>
        <div className="section__right">
          <StrokeText />
        </div>
      </div>
      <div className="section__container flex justify-around">
        <div className="section__left">
          <MagneticButton text='Magnetic button' />
        </div>
        <div className="section__right">
          <p>This site contain some showcases of some simple motional web design effect </p>
        </div>
      </div>
      <div className="section__container flex flex-col justify-around">
        <div className="section__top">
          <p>A real world project I'm involved in</p>
        </div>
        <div className="section__bottom">
          <div className="card__container">
            <a href="https://goldfever.io/" target="_blank" rel="noreferrer">
              <img src={GoldFever} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home