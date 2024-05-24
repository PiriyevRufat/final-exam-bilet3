import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import Product from '../Product/Product'

const Products = () => {
    const { data }=useContext(MainContext)
    const [inpvalue, setInpValue] = useState("")
    const [sortedData, setSortedData] = useState("default")

     const filteredData = data.filter((item) => item.name.toLowerCase().includes(inpvalue))
     filteredData.sort((a, b) => {
          const nameA = a.name.toLowerCase()
          const nameB = b.name.toLowerCase()
          const priceA = a.price
          const priceB = b.price

          if(sortedData === "asc") {
               return nameA.localeCompare(nameB)
          } else if(sortedData === "desc") {
               return nameB.localeCompare(nameA)
          } else if(sortedData === "High To Low") {
               return priceB - priceA
          } else if(sortedData === 'Low To High') {
               return priceA - priceB
          } else {
               return 0
          }
     })

    return (
        <React.Fragment>
            <div className='container d-flex mt-5'>
          <input type="text" placeholder='Search' onChange={(e) => setInpValue(e.target.value)}/>
          <select onChange={(e) => setSortedData(e.target.value)}>
               <option value="default">Default</option>
               <option value="asc">A-Z</option>
               <option value="desc">Z-A</option>
               <option value="High To Low">High To Low</option>
               <option value="Low To High">Low To High</option>
          </select>
        </div>
        <div className='d-flex'>
        {
          filteredData
.map((item,index)=>(
                  <Product key={index} item={item}/>
          ))
      }
        </div>
        </React.Fragment>
      )
}

export default Products