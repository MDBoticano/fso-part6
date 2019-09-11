import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/Anecdotes'

const App = ({ store }) => {
  
  
  return (
    <div>
      <Anecdotes store={store} />
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App