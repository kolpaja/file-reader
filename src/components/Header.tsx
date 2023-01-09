import { Link } from 'react-router-dom'
import '../styles/components/header.css';
import githubIcon from '../assets/icons/githubIcon.svg';
import logo from '../assets/icons/filesIcon.jpg';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='header'>
      <nav className='nav'>

        <div className="logo">
          <Link to='/'> <img src={logo} alt='github project code' width={50} height={50} /></Link>
        </div>

        <ul className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='about'>About</Link>
        </ul>

        <div className="code">
          <a href='https://github.com/kolpaja/file-reader.git' target='_blank' title='go to code'>
            <img src={githubIcon} alt='github project code' width={50} height={50} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header