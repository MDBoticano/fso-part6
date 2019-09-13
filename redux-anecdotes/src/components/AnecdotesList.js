import React from 'react'
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { voteFor } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } 
  from '../reducers/notificationReducer'

const AnecdotesList = (props) => {
  const voteHandler = (anecdote) => {
    props.voteFor(anecdote.id)

    const voteNotification = (`you voted for '${anecdote.content}'`)
    props.createNotification(voteNotification)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
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
    return anecdote.content.toLowerCase().includes(filter.toLowerCase())}
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
    createNotification: notif => dispatch(createNotification(notif)),
    removeNotification: () => dispatch(removeNotification()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnecdotesList)