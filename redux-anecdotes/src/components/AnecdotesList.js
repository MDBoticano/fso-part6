import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ content, votes, voteHandler, id }) => {
  return (
    <div key={id} style={{ marginBottom: '.5rem' }}>
      <div style={{ fontSize: '1.25rem' }}>
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
  /* Filters Anecdotes based on filter state value */
  const filterAnecdotes = (anecdotes, filterTerm) => {
    const anecdotesCopy = [...anecdotes]
    return anecdotesCopy.filter(anecdote => {
      return anecdote.content.includes(filterTerm)}
    )
  }
  
  /* Sort anecdotes based on likes (descending) */
  const sortAnecdotes = (anecdotes) => {
    const anecdotesCopy = [...anecdotes]
    return anecdotesCopy.sort((a,b) => b.votes - a.votes)
  }
  
  const anecdotes = store.getState().anecdotes  

  const filteredAnecdotes = filterAnecdotes(anecdotes, store.getState().filter)

  const sortedAnecdotes = sortAnecdotes(filteredAnecdotes)

  const voteHandler = (anecdote) => {
    store.dispatch(voteFor(anecdote.id))

    const voteNotification = ('you voted \'' + anecdote.content.toString() + '\'')
    store.dispatch(createNotification(voteNotification))
    setTimeout(() => {
      store.dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div>
    { sortedAnecdotes.map( anecdote => {
      return (
        <Anecdote 
          key={anecdote.id}
          id={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
          voteHandler={() => voteHandler(anecdote)}
        />
      )
    })}
    </div>
  )
}

export default AnecdotesList