import React from 'react'
import { shallow } from 'enzyme'
import { AddTodoButton } from '../add_todo_button'
import expect from 'expect'

function setup() {
  const props = {
    startCreateTodo: expect.createSpy()
  }

  const enzymeWrapper = shallow(<AddTodoButton {...props} />)

  return { props, enzymeWrapper }
}

describe("<AddTodoButton>", () => {
  it("has an onClick function", () => {
    const { enzymeWrapper } = setup();
    const props = enzymeWrapper.find('Button').props()
    expect(props.onClick).toBeA('function')
  })

  it("calls startCreateTodo if clicked", () => {
    const { enzymeWrapper, props } = setup();
    const button = enzymeWrapper.find('Button')
    expect(props.startCreateTodo.calls.length).toBe(0)
    button.props().onClick()
    expect(props.startCreateTodo.calls.length).toBe(1)
  })

})
