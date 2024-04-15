import { Link } from 'react-router-dom'
import MagneticButton from '../../components/MagneticButton'
import StrokeText from '../../components/StokeText'
import GoldFever from "../../assets/images/goldfever.png"
import Web3Image from "../../assets/images/web3.png"

type Props = {}

const MyWorks = ({ }: Props) => {
  return (
    <>
      <div className="section__container flex justify-between snap-center">
        <div className="section__left text-left" style={{ width: '30%' }}>
          <p>Hi, I'm Finn Nguyen, a frontend developer seeking to learn advanced html and css along side with mastering frontend technologies</p>
        </div>
        <div className="section__right">
          <StrokeText />
        </div>
      </div><div className="section__container flex justify-around snap-center">
        <div className="section__left">
          <MagneticButton text='Magnetic button' />
        </div>
        <div className="section__right">
          <p>This site contain some showcases of some simple motional web design effect </p>
        </div>
      </div><div className="section__container flex justify-around snap-center">
        <div className="section__left">
          <p>My basic step to Web3 interaction</p>
        </div>
        <div className="section__right">
          <Link to='/home/web3'>
            <div className="card__container">
              <img src={Web3Image} style={{ width: "50rem" }} />
            </div>
          </Link>
        </div>
      </div><div className="section__container flex flex-col justify-around snap-center">
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
    </>
  )
}

export default MyWorks