import AppDispatcher from "../dispatchers/AppDispatcher";
import Constants from "../constants/Constants";

var FilterActionCreators = {
  changeRoute(route) {
    let action = {
      actionType: Constants.CHANGE_ROUTE,
      grouping: route.group,
      due: route.due,
      archived: route.archived
    }
    AppDispatcher.dispatch(action);
  },
  changeGrouping(grouping) {
    let action = {
      actionType: Constants.CHANGE_GROUPING,
      grouping: grouping
    }
    AppDispatcher.dispatch(action);
  },
  changeShow(show) {
    let action = {
      actionType: Constants.CHANGE_SHOW,
      show: show
    }
    AppDispatcher.dispatch(action);
  },
  changeDueFilter(filter) {
    let action = {
      actionType: Constants.CHANGE_DUE_FILTER,
      filter: filter
    }
    AppDispatcher.dispatch(action);
  },
  search(term) {
    let action = {
      actionType: Constants.SEARCH,
      term: term
    }
    AppDispatcher.dispatch(action);
  }
}
export default FilterActionCreators;
