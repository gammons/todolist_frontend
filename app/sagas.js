import { takeEvery  } from 'redux-saga';
import { openAlert, confirmationAlert } from 'actions/modal_actions';
import { updateTodo } from 'actions/todo_actions';
import { take, put, call  } from 'redux-saga/effects';
import Backend from 'backends/TestBackend'
import * as constants from './constants'

const backend = new Backend()
const updateTodoInBackend = todo => backend.update(todo)
const fetchTodos = () => backend.fetchTodos()

export function* toggleArchived(action) {
  yield put(openAlert("Are you sure you wish to archive this todo?"))
  yield take(constants.ALERT_OK)
  try {
    yield call(updateTodoInBackend, action.todo)
    yield put(updateTodo(action.todo))
    yield put(confirmationAlert("The todo has been archived."))
  } catch(error) {
    yield put(confirmationAlert("A backend failure occurred."))
  }
}

export function* runFetchTodos(action) {
  try {
    const todos = yield call(fetchTodos)
    yield put({type: constants.TODOS_FETCHED, payload: todos})
  } catch(error) {
    yield put(openAlert("A backend failure occurred."))
  }
}

export function* watchToggleArchived() {
  yield* takeEvery(constants.TOGGLE_ARCHIVE_TODO, toggleArchived)
}

export function* watchFetchTodos() {
  yield* takeEvery(constants.FETCH_TODOS, runFetchTodos)
}

export default function* rootSaga() {
  yield [
    watchToggleArchived(),
    watchFetchTodos()
  ]
}
