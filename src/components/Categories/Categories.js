import React, { useEffect, useState } from 'react'
import axios from 'axios';
import classes from "./Categories.module.css"
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    })

    const showProducts = (category) => {
        navigate("/products/category/" + category);
    }

  return (
    <section>
        <h2 className={classes.headerText}>Shop By Categories</h2>
        <div className={classes.container}>
            {
                categories.map(
                    category => (
                        <div key={category} className={classes.category} onClick={() => showProducts(category)}>
                            {category}
                        </div>
                    )
                )
            }
        </div>
    </section>
  )
}

export default Categories