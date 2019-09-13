import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from 
  '../reducers/notificationReducer'

const AnecdoteForm = ( props ) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    
    /* Create and Dispatch actions */
    props.createAnecdote(content)
    const anecdoteCreated = `Added '${content}' to anecdotes list`
    props.createNotification(anecdoteCreated)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
    event.target.anecdote.value = ''
  }
  
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { 
    createAnecdote: anecdote => dispatch(createAnecdote(anecdote)),
    createNotification: notif => dispatch(createNotification(notif)),
    removeNotification: () => dispatch(removeNotification())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)