import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

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
  const anecdotes = store.getState().anecdotes

  /* Sort anecdotes based on likes (descending) */
  const sortAnecdotes = (anecdotes) => {
    const anecdotesCopy = [...anecdotes]
    return anecdotesCopy.sort((a,b) => b.votes - a.votes)
  }

  const sortedAnecdotes = sortAnecdotes(anecdotes)

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