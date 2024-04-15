import MenuButton from '../../components/MenuButton'
import './index.css'

type Props = {}

const Navbar = ({}: Props) => {
    
  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    window.location.href = '/login';
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scroll100Vh = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav className='navbar__container flex flex-row w-screen items-center'>
      <MenuButton />
      <ul className='flex'>
        <li><a href='/home/my-works'>Home</a></li>
        <li><a onClick={scroll100Vh}>About</a></li>
        <li><a onClick={scrollToBottom}>Contact</a></li>
      </ul>
      <button className='logout-button' onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navbar