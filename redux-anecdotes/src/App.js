import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'

const App = ({ store }) => {
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdotesList store={store} />
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App