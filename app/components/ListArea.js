import React from 'react';

import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Todo from './Todo';
import Subheader from 'material-ui/Subheader';

class ListArea extends React.Component {
  render() {
    return(
      <div>
        <Subheader>All todos</Subheader>
        <List>
        {this.props.todos.map((todo) => { return <Todo key={todo.id} todo={todo} /> }) }
        </List>
      </div>
    )
  }
}

export default ListArea;
