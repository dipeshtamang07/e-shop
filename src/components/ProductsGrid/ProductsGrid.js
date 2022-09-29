import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classes from "./ProductsGrid.module.css"

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/" + category )
        .then(res => {
            setProducts(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }, [])

    const showProductDetails = (id) => {
        navigate("/product-details/" + id);
    }

    if (loading) {
        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
            <h1>loading...</h1>
        </div>
    }

    return (
        <section>
            <h3>{category}</h3>
            <div className={classes.container}>
                {
                    products.map(
                        product => (
                            <div key={product.id} className={classes.productItem} onClick={() => showProductDetails(product.id)}>
                                <img src={product.image} className={classes.productImage} />
                                <div>
                                    <h6>{product.title}</h6>
                                    <label>Rating: {product.rating.rate} ({product.rating.count})</label>                   
                                    <h3>${product.price}</h3> 
                                    <p>{product.description}</p>          
                                </div>           
                            </div>
                        )
                    )
                }
            </div>
        </section>
    )
}

export default ProductsGrid