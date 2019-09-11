const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const incrementGood = () => {
        let { good, ok, bad } = state
        good += 1

        const newState = { good, ok, bad }

        return newState
      }

      return incrementGood()
    case 'OK':
      const incrementOk = () => {
        let { good, ok, bad } = state

        ok += 1

        const newState = { good, ok, bad }

        return newState
      }
      return incrementOk()
    case 'BAD':
      const incrementBad = () => {
        let { good, ok, bad } = state

        bad += 1

        const newState = { good, ok, bad }

        return newState
      }
      return incrementBad()
    case 'ZERO':
      return initialState
    default:
      return state
  }
}

export default counterReducer