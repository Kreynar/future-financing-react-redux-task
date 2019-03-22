import { takeEvery, all, select, call, put } from 'redux-saga/effects'

import { FETCH_START, createActionFetchPending, createActionFetchFulfilled } from '../actions'
import fetchMock from '../mocks/fetch'

const personUrl = 'http://fubar.com/person/'
const facilityUrl = 'http://fubar.com/facility/'
const exposureUrl = 'http://fubar.com/exposure/'

if (process.env.NODE_ENV !== 'production') {
  fetch = fetchMock
}

export default function* rootSaga() {
  yield takeEvery(FETCH_START, fetchSaga)
}

function* fetchSaga() {
  yield put(createActionFetchPending())
  const person = yield select(getPerson)
  const { val1, val2 } = yield call(fetchData, personUrl + person)
  const [facilityData, exposureData] = yield all([
    call(fetchData, facilityUrl + val1),
    call(fetchData, exposureUrl + val2)
  ])
  const multipliedResult = facilityData.val3 * exposureData.val5
  yield put(createActionFetchFulfilled(multipliedResult))
}

const getPerson = state => state.input

const fetchData = url => 
  fetch(url)
  .then(response => response.json())
