import { CHANGE_INPUT, createActionChangeInput } from '../actions'

const regexAlphanumericOneToTenLength = /^([a-zA-Z0-9_-]){1,10}$/

export const validationMiddleware = store => next => action => {
  if (action.type === CHANGE_INPUT) {
    const isInputValid = regexAlphanumericOneToTenLength.test(action.payload)
    return next(createActionChangeInput({ input: action.payload, isInputValid }))
  }
  return next(action)
}