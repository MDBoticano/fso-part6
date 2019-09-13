import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { voteFor } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } 
  from '../reducers/notificationReducer'

const AnecdotesList = (props) => {
 
  
  const anecdotes = props.anecdotes  

  const filteredAnecdotes = filterAnecdotes(anecdotes, props.filter)

  const sortedAnecdotes = sortAnecdotes(filteredAnecdotes)

  const voteHandler = (anecdote) => {
    props.voteFor(anecdote.id)

    const voteNotification = ('you voted \'' + anecdote.content.toString() + '\'')
    props.createNotification(voteNotification)
    setTimeout(() => {
      props.removeNotification()
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

/* Helper selectors */
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }

}

export default connect(
  mapStateToProps
)(AnecdotesList)