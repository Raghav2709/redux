import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/Cartslice'
import { fetchproducts, STATUSES } from '../redux/Productslice'

const Home = () => {

//const [products, setProducts] = useState([])
const dispatch = useDispatch()
const {data:products, status} =  useSelector((state)=>state.product)

useEffect(() => {
  dispatch(fetchproducts());
},[])

const handleadd = (product) => {
  dispatch(add(product)); //product taken as payload
}

if(status === STATUSES.LOADING){
    return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
}

  return (
    <div className='productsWrapper'>
{
    products.map((products) => (
        <div className='card' key={products.id}>
            <img src={products.image} alt="img" />
            <h4>{products.title}</h4>
            <h5>{products.price}</h5>
            <button className='btn' onClick={() => handleadd(products)}>Add to cart</button>
        </div>
    ))
}
    </div>
  )
}

export default Home