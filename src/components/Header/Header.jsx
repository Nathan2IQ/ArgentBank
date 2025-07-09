import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/argentBankLogo.png'

function Header() {

    return (
        <header>
            <h1 className='display-none'>Argent Bank</h1>
            <nav className='nav'>

                <Link className='nav__home' to="/">
                    <img src={logo} alt="Argent Bank Logo" className="logo" />
                </Link>

                <div>
                    <Link  className='nav__sign' to="/sign-in">
                        <i className="fa-solid fa-circle-user"></i>
                        <p>Sign In</p>
                    </Link>
                </div>

            </nav>
        </header>
    )
}

export default Header