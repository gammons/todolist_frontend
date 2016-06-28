import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TodoActionCreators from '../actions/TodoActionCreators';
import AddEditTodoDialog from './AddEditTodoDialog';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class AddTodo extends React.Component {
  state = {
    open: false
  };

  handleDialogOpen() {
    this.setState({open: true});
  }

  handleDialogClose() {
    this.setState({open: false});
  }

  addTodo(subject, due) {
    TodoActionCreators.create(subject, due);
    this.setState({open: false});
  }

  render() {
    return(
      <div>
        <FloatingActionButton style={style} onClick={this.handleDialogOpen.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>

      </div>
    )
  }
}
export default AddTodo;
