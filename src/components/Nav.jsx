import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../DataContext/DataContext'

const Nav = () => {

    const {searchInput, setSearchInput} = useContext(DataContext);
  return (
    <nav>
        <input type='text' placeholder='Search Item' value = {searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to ="/add">Add</Link></li>
        </ul>
    </nav>
  )
}

export default Nav