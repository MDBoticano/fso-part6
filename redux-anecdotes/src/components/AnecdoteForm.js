import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from 
  '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = ( props ) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    /* Create and Dispatch actions */
    const newAnecdote = await anecdoteService.createNew(content)
    props.createAnecdote(newAnecdote)
    const anecdoteCreated = `Added '${content}' to anecdotes list`
    
    
    props.createNotification(anecdoteCreated)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
    
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

export default connect( null, mapDispatchToProps)(AnecdoteForm)