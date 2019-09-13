import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  const initializeAnecdotesProp = props.initializeAnecdotes
  useEffect( () => {
    anecdoteService
      .getAll().then(anecdotes => initializeAnecdotesProp(anecdotes))
  }, [initializeAnecdotesProp])


  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  )
}

export default connect( null, { initializeAnecdotes })(App)