import React from 'react'
import { filterChange } from '../reducers/filterReducer'

const Filter = ({ store }) => {
  const handleChange = (event) => {
    const inputFieldValue = event.target.value
    store.dispatch(filterChange(inputFieldValue))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={store.getState().filter}/>
    </div> 
  )
}

export default Filter