import _ from "lodash";

import { SHOW_UNARCHIVED, SHOW_ARCHIVED } from '../constants';

export default class ShowFilter {
  constructor(todos) {
    this.todos = todos;
  }

  filterBy(show) {
    return _.filter(this.todos, (todo) => {
      return (show === SHOW_UNARCHIVED) ? todo.archived === false : todo.archived === true
    })
  }
}
