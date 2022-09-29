import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';
import classes from "./ProductDetails.module.css"

const ProductDetails = () => {

  const { id } = useParams();
  const { setCartLength } = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 10.99,
    image: "",
    rating: {
      rate: 4.5,
      count: 120
    }
  })

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + id)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      })
  }, [])

  const addToCart = () => {
    setCartLength(prev => prev + 1);
  }

  if (loading) {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
        <h1>loading...</h1>
    </div>
}

  return (
    <section>
      <div className={classes.container}>
        <img src={product.image} alt="product image" />
        <div>
          <h2>{product.title}</h2>
          <h1>${product.price}</h1>
          <h5>Description</h5>
          <p>{product.description}</p>
          <button className="btn btn-large btn-primary" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails