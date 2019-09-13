import React from 'react'

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

export default Anecdote