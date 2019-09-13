import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    const inputFieldValue = event.target.value
    props.filterChange(inputFieldValue)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={props.filter}/>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterChange: value => dispatch(filterChange(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter)