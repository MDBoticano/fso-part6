const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  let { good, ok, bad } = state

  switch (action.type) {
    case 'GOOD':
      good += 1

      return { good, ok, bad }
    case 'OK':
      ok += 1

      return { good, ok, bad }
    case 'BAD':
      bad += 1

      return { good, ok, bad }
    case 'ZERO':
      return initialState
    default:
      return state
  }
}

export default counterReducer