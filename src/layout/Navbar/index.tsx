import MenuButton from '../../components/MenuButton'
import './index.css'

type Props = {}

const Navbar = ({}: Props) => {
    
  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    window.location.href = '/login';
  }

  return (
    <nav className='navbar__container flex flex-row w-screen items-center'>
      <MenuButton />
      <ul className='flex'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <button className='logout-button' onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navbar