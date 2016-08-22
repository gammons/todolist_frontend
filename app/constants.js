export const LOAD = "LOAD"
export const CHANGE_ROUTE = "CHANGE_ROUTE"
export const TOGGLE_ARCHIVE_TODO = "TOGGLE_ARCHIVE_TODO"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE_TODO"
export const CHANGE_GROUPING = "CHANGE_GROUPING"
export const CHANGE_SHOW = "CHANGE_SHOW"
export const NONE = "none"
export const BY_CONTEXT = "context"
export const BY_PROJECT = "project"
export const SHOW_UNARCHIVED = "unarchived"
export const SHOW_ARCHIVED = "archived"
export const TODAY = "today"
export const TOMORROW = "tomorrow"
export const THIS_WEEK = "this_week"
export const ALL = "all"
export const SEARCH = "SEARCH"
export const NOTIFICATION = "NOTIFICATION"
export const ADD_EDIT_NOTIFICATION = "ADD_EDIT_NOTIFICATION"
export const LOAD_SUCCESS = "LOAD_SUCCESS"
export const SAVE_SUCCESS = "SAVE_SUCCESS"
export const BACKEND_FAILURE = "BACKEND_FAILURE"

export const TODOS_FETCHED = "TODOS_FETCHED"


// *******************
// Actions
// *******************

export const ALERT_CANCEL = "ALERT_CANCEL"
export const ALERT_OK = "ALERT_OK"

export const DUE_TODAY = "DUE_TODAY"
export const ADD_TODO = "ADD_TODO"
export const CREATE_TODO = "CREATE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const FETCH_TODOS = "FETCH_TODOS"


// *******************
// Starting sagas
// *******************
export const START_ARCHIVE_TODO_SAGA = "START_ARCHIVE_TODO_SAGA"
export const START_UNARCHIVE_TODO_SAGA = "START_UNARCHIVE_TODO_SAGA"
export const START_EDIT_TODO_SAGA = "START_EDIT_TODO_SAGA"
export const START_UPDATE_TODO_SAGA = "START_UPDATE_TODO_SAGA"
export const START_CREATE_TODO_SAGA = "START_CREATE_TODO_SAGA"
export const START_DELETE_TODO_SAGA = "START_DELETE_TODO_SAGA"

// Used to open a modal dialog
export const MODAL = "MODAL"

// Modal types
export const ADD_TODO_MODAL = "ADD_TODO_MODAL"
export const EDIT_TODO_MODAL = "EDIT_TODO_MODAL"
export const CONFIRMATION_ALERT_MODAL = "CONFIRMATION_ALERT_MODAL"

export const ALERT = "ALERT"
export const ALERT_MODAL = "ALERT_MODAL"
export const CONFIRMATION_ALERT = "CONFIRMATION_ALERT"
