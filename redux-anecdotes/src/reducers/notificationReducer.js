export const createNotification = (content) => {
  return {
    type: 'CREATE_NOTIFICATION',
    content
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

const initialState = '\u00A0' // non-breaking space

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_NOTIFICATION':
      return action.content
    case 'REMOVE_NOTIFICATION':
      return initialState
    default:
      return state
  }
}

export default notificationReducer