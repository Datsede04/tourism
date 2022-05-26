import React from 'react'

const SearchBar = () => {
  return (
        <div className="form__group u-margin-top-medium u-margin-bottom-medium ">
            <input type="text" className="form__input" id="name" placeholder="Search" required/>
            <label htmlFor="name" className="form__label">Search</label>   
        </div>
  )
}

export default SearchBar