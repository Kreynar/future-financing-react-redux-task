import { CHANGE_INPUT, FETCH_PENDING, FETCH_FULFILLED, CLOSE_MODAL } from '../actions/index'

const initialState = {
  input: '',
  isInputValid: false,
  isFetchPending: false,
  multiplicationResult: '',
  isModalOpen: false
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_INPUT: 
      return Object.assign({}, state, { 
        input: action.payload.input,
        isInputValid: action.payload.isInputValid
      })
    case FETCH_PENDING:
      return Object.assign({}, state, { isFetchPending: true })
    case FETCH_FULFILLED:
      return Object.assign({}, state, { 
        isFetchPending: false,  
        multiplicationResult: action.payload,
        isModalOpen: true
      })
    case CLOSE_MODAL:
      return Object.assign({}, state, { isModalOpen: false })
    default:
      return state
  }
}

export default rootReducer