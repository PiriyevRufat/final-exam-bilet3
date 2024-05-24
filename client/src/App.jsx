import { useEffect, useState } from 'react'
import axios from 'axios'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContext from './context/context'
import ROUTES from './routes/Routes'
import './App.css'
import Swal from 'sweetalert2'
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [data,setData]=useState([])
  const router=createBrowserRouter(ROUTES)
  useEffect(()=>{
    axios.get("http://localhost:8080/").then(res=>{
    setData(res.data)
  })
  },[])
  const [wishlistArr, setWishlistArr] = useState(localStorage.getItem("Wishlist") ? JSON.parse(localStorage.getItem("Wishlist")) : [])

  localStorage.setItem("Wishlist", JSON.stringify(wishlistArr))

  const addToWishlist = (item) => {
       const existedProduct = wishlistArr.find((x) => x._id === item._id)
       if(!existedProduct) {
            setWishlistArr([...wishlistArr, item])
            Swal.fire({
                 title: "Success",
                 text: "Added to Wishlist",
                 icon: "success"
            });
            return
       }Swal.fire({
            title: "OOPS",
            text: "Already in Wishlist",
            icon: "warning"
       });
  }

  const removeFromWishlist = (id) => {
       setWishlistArr(wishlistArr.filter((item) => item._id !== id))
       Swal.fire({
            title: "Success",
            text: "Successfully Removed from Wishlist",
            icon: "success"
       });
  }
  const contextData={
    data,setData,wishlistArr, setWishlistArr,removeFromWishlist,addToWishlist
  }
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App