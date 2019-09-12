import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'

const App = ({ store }) => {
  
  return (
    <div>
      <Notification store={store} />
      <h2>Anecdotes</h2>
      <AnecdotesList store={store} />
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App