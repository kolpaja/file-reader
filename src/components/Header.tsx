import { Link } from 'react-router-dom'
import '../styles/components/header.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='header'>
      <div className="logo"></div>

      <nav className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>

      <div className="code">

      </div>
    </header>
  )
}

export default Header