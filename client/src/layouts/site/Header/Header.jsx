import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <React.Fragment>
        <nav>
            <header className='header-my'>
                <div className="container">
                    <div className="row">
                        <div className="mynavbar">
                        <div className="nav-left">
                            <Link>
                            Tasty
                            </Link>
                        </div>
                        <div className="nav-right">
                            <ul className='my-ul'>
                                <li>
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Menu</Link>
                                </li>
                                <li>
                                    <Link>Specialities</Link>
                                </li>
                                <li>
                                    <Link>Reservation</Link>
                                </li>
                                <li>
                                    <Link to='/wishlist'>Wishlist</Link>
                                </li>
                                <li>
                                    <Link to='/admin'>Admin</Link>
                                </li>
                                <li>
                                    <Link>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    </React.Fragment>
  )
}

export default Header