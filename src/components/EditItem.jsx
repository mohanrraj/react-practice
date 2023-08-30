import React, { useContext, useEffect } from 'react'
import DataContext from '../DataContext/DataContext'
import { useParams } from 'react-router-dom';

const EditItem = () => {

    const {id} = useParams();
    const {searchedItems, handleEdit, updatedTask, setUpdatedTask} = useContext(DataContext);

    const foundItem = searchedItems.find(item => item.id.toString() === id);

    useEffect(()=>{
        setUpdatedTask(foundItem.task);
    }, [])

  return (
    <div>
        <h1>Edit Item</h1>
        <label htmlFor='editItem'>Item : </label>
        <input type='text' onChange={(e) => setUpdatedTask(e.target.value)} value = {updatedTask} />
        <button type='button' onClick={() => handleEdit(foundItem.id)}>Update</button>
    </div>
  )
}

export default EditItem