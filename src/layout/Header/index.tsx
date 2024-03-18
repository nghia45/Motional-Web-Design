import BounceArrow from '../../components/BounceArrow'
import TypeWritting from '../../components/TypeWriting'
import Navbar from '../Navbar'
import './index.css'

type Props = {}

const Header = ({ }: Props) => {

  return (
    <div className='header__container flex flex-col items-center' id='header'>
      <Navbar />
      <TypeWritting />
      <BounceArrow />
    </div>
  )
}


export default Header