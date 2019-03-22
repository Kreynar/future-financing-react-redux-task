export const CHANGE_INPUT = 'CHANGE_INPUT'
export const FETCH_START = 'FETCH_START'
export const FETCH_PENDING = 'FETCH_PENDING'
export const FETCH_FULFILLED = 'FETCH_FULFILLED'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function createActionChangeInput(payload) {
  return { type: CHANGE_INPUT, payload }
}

export function createActionFetchStart() {
  return { type: FETCH_START }
}

export function createActionFetchPending() {
  return { type: FETCH_PENDING }
}

export function createActionFetchFulfilled(payload) {
  return { type: FETCH_FULFILLED, payload }
}

export function createActionCloseModal() {
  return { type: CLOSE_MODAL }
}
