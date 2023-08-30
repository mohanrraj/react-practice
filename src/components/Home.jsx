import React, { useContext } from 'react'
import DataContext from '../DataContext/DataContext'
import { Link } from 'react-router-dom';

const Home = () => {
    const {searchedItems, handleDelete} = useContext(DataContext);

  return (
    <ul>
        {searchedItems ? searchedItems.map(item => <li key={item.id}>{item.task} <Link to={`/edit/${item.id}`}><button>Edit</button></Link><button onClick={()=>handleDelete(item.id)} type="submit">Delete</button></li>) : <p>No items to Display</p>}
    </ul>
  )
}

export default Home