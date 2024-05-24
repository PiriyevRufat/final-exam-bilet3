import React from 'react'
import Products from '../Products/Products'
import './Crud.css'
const Crud = () => {
  return (
    <div className='crud-sect'>
        <div className="container">
            <div className="row">
                <div className='crud-heading'>
                    <span>OUR MENU</span>
                    <h2>Discover Our Exclusive Menu</h2>
                </div>
                <div>
                <Products/>
                </div>
                <div className='crud-footer mt-5'>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <a href="">Make a Reservation</a>
                </div>
            </div>
            </div>       
    </div>
  )
}

export default Crud