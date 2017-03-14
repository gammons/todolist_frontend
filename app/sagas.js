import { takeEvery } from 'redux-saga'
import { okConfirmDialog, openConfirmDialog, openModal } from './actions/modal_actions'
import { openAlert } from './actions/alert_actions'
import { addTodo, updateTodo, deleteTodo } from './actions/todo_actions'
import { take, put, call } from 'redux-saga/effects'
import TestBackend from './backends/TestBackend'
import LocalBackend from './backends/LocalBackend'
import * as constants from './constants'

let backend
if (window.location.hostname === 'demo.todolist.site') {
  backend = new TestBackend()
} else {
  backend = new LocalBackend()
}

const addTodoInBackend = todo => backend.add(todo)
const updateTodoInBackend = todo => backend.update(todo)
const deleteTodoInBackend = todo => backend.delete(todo)
const fetchTodos = () => backend.fetchTodos()

export function* runCreateTodo() {
  yield put(openModal(constants.ADD_TODO_MODAL))
  const ret = yield take(constants.CREATE_TODO)
  yield put(okConfirmDialog())
  try {
    yield call(addTodoInBackend, ret.todo)
    yield put(addTodo(ret.todo))
    yield put(openAlert('The todo has been added.'))
  } catch (error) {
    yield put(openAlert('A backend failure occurred.'))
  }
}

export function* runDeleteTodo(action) {
  yield put(openConfirmDialog('Are you sure you wish to delete this todo?'))
  yield take(constants.CONFIRM_DIALOG_OK)
  try {
    yield call(deleteTodoInBackend, action.todo)
    yield put(deleteTodo(action.todo))
    yield put(openAlert('The todo has been deleted.'))
  } catch (error) {
    yield put(openAlert('A backend failure occurred.'))
  }
}

export function* runArchiveTodo(action) {
  yield put(openConfirmDialog('Are you sure you wish to archive this todo?'))
  yield take(constants.CONFIRM_DIALOG_OK)
  try {
    yield call(updateTodoInBackend, action.todo)
    yield put(updateTodo(action.todo))
    yield put(openAlert('The todo has been archived.'))
  } catch (error) {
    yield put(openAlert('A backend failure occurred.'))
  }
}

export function* runUnarchiveTodo(action) {
  yield put(openConfirmDialog('Are you sure you wish to un-archive this todo?'))
  yield take(constants.CONFIRM_DIALOG_OK)
  try {
    yield call(updateTodoInBackend, action.todo)
    yield put(updateTodo(action.todo))
    yield put(openAlert('The todo has been un-archived.'))
  } catch (error) {
    yield put(openAlert('A backend failure occurred.'))
  }
}

export function* runFetchTodos() {
  try {
    const todos = yield call(fetchTodos)
    yield put({ type: constants.TODOS_FETCHED, payload: todos })
  } catch (error) {
    yield put(openAlert('A backend failure occurred.'))
  }
}

export function* runUpdateTodo(action) {
  try {
    yield call(updateTodoInBackend, action.todo)
    yield put(updateTodo(action.todo))
    yield put(openAlert('The todo has been updated.'))
  } catch (error) {
    yield put(openAlert('A backend failure occurred.'))
  }
}

export function* watchArchiveTodo() {
  yield* takeEvery(constants.START_ARCHIVE_TODO_SAGA, runArchiveTodo)
}

export function* watchUnarchiveTodo() {
  yield* takeEvery(constants.START_UNARCHIVE_TODO_SAGA, runUnarchiveTodo)
}

export function* watchFetchTodos() {
  yield* takeEvery(constants.FETCH_TODOS, runFetchTodos)
}

export function* watchCreateTodo() {
  yield* takeEvery(constants.START_CREATE_TODO_SAGA, runCreateTodo)
}

export function* watchDeleteTodo() {
  yield* takeEvery(constants.START_DELETE_TODO_SAGA, runDeleteTodo)
}

export function* watchUpdateTodo() {
  yield* takeEvery(constants.START_UPDATE_TODO_SAGA, runUpdateTodo)
}

export default function* rootSaga() {
  yield [
    watchArchiveTodo(),
    watchUnarchiveTodo(),
    watchFetchTodos(),
    watchCreateTodo(),
    watchDeleteTodo(),
    watchUpdateTodo(),
  ]
}
