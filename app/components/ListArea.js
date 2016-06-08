import React from 'react';

import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Todo from './Todo';
import Subheader from 'material-ui/Subheader';
import TodoStore from "../stores/TodoStore";

class ListArea extends React.Component {
  state = {
    todos: TodoStore.grouped()
  }
  onChange = () => {
    this.setState({todos: TodoStore.grouped()});
  }
  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
  }

  render() {
    return(
        <div>
          {this.grouping()}
        </div>
    )
  }
  grouping() {
    return this.state.todos.map((grouping) => {
      return(
        <div key={grouping.title}>
          <Subheader>{grouping.title}</Subheader>
          <List>
            {this.todosForGroup(grouping)}
          </List>
        </div>
      );
    });
  }
  todosForGroup(grouping) {
    return grouping.todos.map((todo) => { return <Todo key={todo.id} todo={todo} /> })
  }
}

export default ListArea;
