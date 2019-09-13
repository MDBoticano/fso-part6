import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdotesList = (props) => {
  const voteHandler = (anecdote) => {
    props.voteFor(anecdote)
    props.setNotification(`you voted for '${anecdote.content}'`, 5);
  }

  return (
    <div>
    { props.visibleAnecdotes.map( anecdote => {
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
const filterAnecdotes = ({ anecdotes, filter}) => {
  const anecdotesCopy = [...anecdotes]
  return anecdotesCopy.filter(anecdote => {
    return (anecdote.content.toLowerCase()).includes(filter.toLowerCase())}
  )
}

/* Sort anecdotes based on likes (descending) */
const sortAnecdotes = ( anecdotes ) => {
  const anecdotesCopy = [...anecdotes]
  return anecdotesCopy.sort((a,b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: sortAnecdotes(filterAnecdotes(state))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    voteFor: id => dispatch(voteFor(id)),
    setNotification: (notif, time) => dispatch(setNotification(notif, time))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnecdotesList)