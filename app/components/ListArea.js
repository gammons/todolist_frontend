import React from 'react';

import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Todo from './Todo';
import Subheader from 'material-ui/Subheader';

class ListArea extends React.Component {
  render() {
    return(
      <div>
        {this.props.todos.map((grouping) => {
        return (<div>
          <Subheader>{grouping.title}</Subheader>
          <List>
          {grouping.todos.map((todo) => { return <Todo key={todo.id} toggleCompleteFn={this.props.toggleCompleteFn} todo={todo} /> }) }
          </List>
          </div>);
                                            })}
      </div>
    )
  }
}

export default ListArea;
