import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import './Product.css'
import { Link } from 'react-router-dom'
const Product = ({item}) => {
    const {addToWishlist}=useContext(MainContext)
  return (
    <div className='my-card col-6 mt-5'>
        <div className='my-card-img'>
            <img src={item.image} alt="" />
        </div>
        <div className='my-card-title'>
            <h3>{item.name}</h3>
            <p>{item.title}</p>
        </div>
        <div className='my-card-price'>
            <h3>${item.price}</h3>
            <button className='btn btn-warning' onClick={() => addToWishlist(item)}>Add to Wishlist</button>
            <button className='btn btn-primary'><Link to={`details/${item._id}`}>View</Link></button>
        </div>
    </div>
  )
}

export default Product