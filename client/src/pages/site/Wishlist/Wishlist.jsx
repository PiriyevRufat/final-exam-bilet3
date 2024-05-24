import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import {Helmet} from "react-helmet";
const Wishlist = () => {
  const {wishlistArr, removeFromWishlist} = useContext(MainContext)
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Price</td>
          <td>DiscountPrice</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {
            wishlistArr && wishlistArr.map((item) => {
              return (
                <tr key={item._id}>
                  <td className='image'><img src={item.image} alt="" /></td>
                  <td><h3>{item.name}</h3></td>
                  <td><span>${item.price}.00</span></td>
                  <td className='btn'><button onClick={() =>removeFromWishlist(item._id)}>Delete</button></td>
                </tr>
              )
            })
        }
      </tbody>
    </table>
    </div>
  )
}

export default Wishlist