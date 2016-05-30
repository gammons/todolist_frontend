import React from 'react';

import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Todo from './todo';
import Subheader from 'material-ui/Subheader';

class ListArea extends React.Component {
  render() {
    return(
      <div>
        <Subheader>All todos</Subheader>
        <List>
        {this.props.store.todos.map((todo) => { return <Todo key={todo.id} todo={todo} store={this.props.store} /> }) }
        </List>
      </div>
    )
  }
}

export default ListArea;
