import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = ({ store }) => {
  
  return (
    <div>
      {/* <Notification store={store} /> */}
      <h2>Anecdotes</h2>
      <Filter store={store}/>
      <AnecdotesList />
      {/* <AnecdoteForm store={store} /> */}
    </div>
  )
}

export default App