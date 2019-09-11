import React from 'react';
import { voteFor, createAnecdote } from './reducers/anecdoteReducer';

const App = ({ store }) => {
  const anecdotes = store.getState()

  // Sort anecdotes based on likes (descending)
  const sortAnecdotes = (anecdotes) => {
    const anecdotesCopy = [...anecdotes]
    return anecdotesCopy.sort((a,b) => b.votes - a.votes)
  }

  const sortedAnecdotes = sortAnecdotes(anecdotes)

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(createAnecdote(content))
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
        {sortedAnecdotes.map(anecdote => 
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => store.dispatch(voteFor(anecdote.id))}>
              vote
            </button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App