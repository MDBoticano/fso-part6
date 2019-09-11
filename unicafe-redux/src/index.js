import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const App = () => {
  const dispatchAction = (type) => {
    return () => {
      store.dispatch({ type: type })
    }
  }

  return (
    <div>
      <button onClick={ dispatchAction('GOOD')}>good</button>
      <button onClick={ dispatchAction('OK')}>neutral</button>
      <button onClick={ dispatchAction('BAD')}>bad</button>
      <button onClick={ dispatchAction('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)