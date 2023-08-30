import React, { useState, useContext } from 'react'
import DataContext from '../DataContext/DataContext'

const Add = () => {

    const {addItem} = useContext(DataContext);
    const [input, setInput] = useState("");

  return (
    <div>
        <h1>Add Item</h1>
        <label htmlFor='newItem'>Task : </label>
        <input type="text" onChange ={(e) => setInput(e.target.value)} placeholder="Enter the Task name" value = {input} required />
        <button type="button" onClick={() => addItem(input)}>ADD</button>
    </div>
  )
}

export default Add