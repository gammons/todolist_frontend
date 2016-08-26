import { createSelector  } from 'reselect';
import Grouper from '../logic/grouper';
import DateFilter from '../logic/date_filter';
import ShowFilter from '../logic/show_filter';

const todosSelector = state => state.todos.todos
const filtersSelector = (state, props) => props.params

const filterTodos = (todos, filter) => {
  const showFilter = new ShowFilter(todos)
  const dateFilter = new DateFilter(showFilter.filterBy(filter.show));
  const grouper = new Grouper(dateFilter.filterBy(filter.due));
  return grouper.grouped(filter.group)
}

export default createSelector(
  todosSelector,
  filtersSelector,
  filterTodos
)
