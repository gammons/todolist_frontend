import Constants from "../constants/Constants"
import moment from "moment";

export default class DateFilter {
  constructor(todos) {
    this.todos = todos
  }

  filterBy(dueFilter) {
    switch(dueFilter) {
      case Constants.TODAY:
        return this._filterByDay();
      case Constants.TOMORROW:
        return this._filterByDay(moment().add(1, "day"));
      case Constants.THIS_WEEK:
        return this._filterByWeek();
      case Constants.ALL:
        return this.todos;
    }
  }

  _filterByDay(due = moment()) {
    return _.filter(this.todos, (todo) => {
      let todoDue = moment(todo.due).clone().startOf('day');
      let dateDue = moment(due).clone().startOf('day');
      if (todo.completed === false && todoDue.isBefore(dateDue)) {
        return true;
      } else if (todoDue.isSame(dateDue)) {
        return true;
      }
      return false;
    });
  }

  _filterByWeek(due = moment()) {
    let sunday = due.clone().day("Sunday");
    let saturday = due.clone().day("Sunday").add(6,"days");

    return _.filter(this.todos, (todo) => {
      if (todo.completed === false && moment(todo.due).isSameOrBefore(sunday)) {
        return true;
      } else if (moment(todo.due).isSameOrAfter(sunday) &&
          moment(todo.due).isSameOrBefore(saturday)) {
        return true;
      }
      return false;
    });
  }
}
