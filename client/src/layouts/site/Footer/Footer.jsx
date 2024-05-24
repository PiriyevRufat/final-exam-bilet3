import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className='col-md footer-col'>
                        <h2 className='mb-3'>Tasty</h2>
                        <div className='footer-text'>
                            <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                        </div>
                        <ul className='footer-ul d-flex'>
                            <li>
                                <Link><i class="fa-brands fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link><i class="fa-brands fa-facebook-f"></i></Link>
                            </li>
                            <li>
                                <Link><i class="fa-brands fa-instagram"></i></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md footer-col'>
                    <h2 className='mb-5'>Opening Hours</h2>
                    <ul className='footer-days'>
                        <li>
                            <Link>Monday: <span>08: - 22:00</span></Link>
                        </li>
                        <li>
                            <Link>Tuesday: <span>08: - 22:00</span></Link>
                        </li>
                        <li>
                            <Link>Wednesday: <span>08: - 22:00</span></Link>
                        </li>
                        <li>
                            <Link>Thursday: <span>08: - 22:00</span></Link>
                        </li>
                        <li>
                            <Link>Friday: <span>08: - 22:00</span></Link>
                        </li>
                        <li>
                            <Link>Saturday: <span>08: - 22:00</span></Link>
                        </li>
                        <li>
                            <Link>Sunday: <span>08: - 22:00</span></Link>
                        </li>
                    </ul>
                    </div>
                    <div className='col-md footer-col'>
                        <h2>Contact Information</h2>
                        <ul className='footer-contacts'>
                            <li>
                                <Link>198 West 21th Street, Suite 721 <br /> New York NY 10016</Link>
                            </li>
                            <li>
                                <Link>+ 1235 2355 98</Link>
                            </li>
                            <li>
                                <Link>info@yoursite.com</Link>
                            </li>
                            <li>
                                <Link>email@email.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md footer-col'>
                        <h2>Newsletter</h2>
                        <p>Far far away, behind the word <br /> mountains, far from the countries.</p>
                        <div className='footer-input'><input type="text" placeholder='Subscribe' /><i class="fa-solid fa-paper-plane"></i></div>
                    </div>
                </div>
                <div className="row">
                <p class="text-center text-muted">© 2022 Company, Inc</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer