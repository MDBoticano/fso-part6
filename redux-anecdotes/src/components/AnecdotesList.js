import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'

const Anecdote = ({ content, votes, voteHandler, id }) => {
  return (
    <div key={id}>
      <div>
        {content}
      </div>
      <div>
        has {votes}
        <button onClick={voteHandler}>
          vote
        </button>
      </div>
    </div>
  )
}

const AnecdotesList = ({ store }) => {
  const anecdotes = store.getState()

  // Sort anecdotes based on likes (descending)
  const sortAnecdotes = (anecdotes) => {
    const anecdotesCopy = [...anecdotes]
    return anecdotesCopy.sort((a,b) => b.votes - a.votes)
  }

  const sortedAnecdotes = sortAnecdotes(anecdotes)

  return (
    <div>
    { sortedAnecdotes.map( anecdote => {
      return (
        <Anecdote 
          key={anecdote.id}
          id={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
          voteHandler={() => store.dispatch(voteFor(anecdote.id))}
        />
      )
    })}
    </div>
  )
}

export default AnecdotesList