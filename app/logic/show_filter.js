import _ from 'lodash'
import { SHOW_ARCHIVED } from '../constants'

export default class ShowFilter {
  constructor(todos) {
    this.todos = todos
  }

  filterBy(show) {
    return _.filter(this.todos, (todo) => todo.archived === (show === SHOW_ARCHIVED))
  }
}
