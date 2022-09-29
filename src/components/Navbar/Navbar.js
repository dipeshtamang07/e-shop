import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from "./Navbar.module.css";
import SearchBar from './SearchBar';
import cartIcon from "../../assets/icons/shopping-cart.png";
import profileIcon from "../../assets/icons/man.png";
import { CartContext } from '../../contexts/CartContext';
import axios from 'axios';

const Navbar = () => {
    const { cartLength } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const getSuggestions = (text) => {
        if (text === "") {
            setSuggestions([]);
            return;
        }
        text = text.toLowerCase();
        const s = products.filter(item => item.title.toLowerCase().includes(text));
        setSuggestions(s);
    }
    return (
        <nav className={classes.navbar}>
            <Link to="/" className={classes.logo}>e-Shop</Link>
            <SearchBar suggestions={suggestions} getSuggestions={getSuggestions}/>
            <div className={classes.right}>
                <Link to="/cart" className={classes.cartLink}>
                    <img src={cartIcon} className={classes.icon} />
                    {cartLength > 0 && <div className={classes.badge}>{cartLength}</div>}
                </Link>
                <Link to="/profile">
                    <img src={profileIcon} className={classes.icon} />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar