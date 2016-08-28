import { TODAY, TOMORROW, THIS_WEEK, ALL } from '../constants'
import moment from 'moment'
import _ from 'lodash'

export default class DateFilter {
  constructor(todos) {
    this.todos = todos
  }

  filterBy(dueFilter) {
    switch (dueFilter) {
      case TODAY:
        return this.filterByDay(moment(), true)
      case TOMORROW:
        return this.filterByDay(moment().add(1, 'day'), false)
      case THIS_WEEK:
        return this.filterByWeek()
      case ALL:
        return this.todos
      default:
        return null
    }
  }

  filterByDay(day = moment(), includePastUncompleted = true) {
    return _.filter(this.todos, (todo) => {
      const todoDue = moment(todo.due).clone().startOf('day')
      const dateDue = day.clone().startOf('day')
      if (includePastUncompleted && todo.completed === false && todoDue.isBefore(dateDue)) {
        return true
      } else if (todoDue.isSame(dateDue)) {
        return true
      }
      return false
    })
  }

  filterByWeek(due = moment()) {
    const sunday = due.clone().day('Sunday')
    const saturday = due.clone().day('Sunday').add(6, 'days')

    return _.filter(this.todos, (todo) => {
      if (todo.completed === false && moment(todo.due).isSameOrBefore(sunday)) {
        return true
      } else if (moment(todo.due).isSameOrAfter(sunday) &&
          moment(todo.due).isSameOrBefore(saturday)) {
        return true
      }
      return false
    })
  }
}
