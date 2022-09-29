import React, { useEffect, useState } from 'react';
import classes from "./SearchBar.module.css";

const SearchBar = ({ suggestions, getSuggestions }) => {

  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    getSuggestions(searchText);
  }, [searchText])

  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <input
          placeholder="Search for products..."
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      {
        (showSuggestions && suggestions.length > 0)
        &&
        <div className={classes.suggestions}>
          {
            suggestions.map(
              product => (
                <div key={product.id} className={classes.suggestion}>
                  {product.title}
                </div>
              )
            )
          }
        </div>
      }
    </div>
  )
}

export default SearchBar