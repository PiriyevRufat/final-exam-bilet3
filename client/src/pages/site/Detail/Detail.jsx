import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
import axios from 'axios'
import {Helmet} from "react-helmet";
const Detail = () => {
    const {data}=useContext(MainContext)
    const {id} =useParams()
    const {addToWishlist}=useContext(MainContext)
    const [dat,setDat]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8080/${id}`).then(res=>{
            setDat({...res.data})
        })
    },[])
  return (
    <div className="container">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Detail of {item.name}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="row">
            <div className='detcard-img'>
                <img src={dat.image} alt="" />
            </div>
            <h5>{dat.name}</h5>
            <span>{dat.title}</span>
            <p>{dat.price}.00$</p>
            <button onClick={() => addToWishlist(dat)} className='cart-btn'>add to Fav</button>
        </div>
    </div>
  )
}

export default Detail