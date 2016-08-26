import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import { Provider  } from 'react-redux';

import { fakeStore, todos as todoFixtures } from '../../../test/test_helper'
import * as constants from '../../constants'

import Todolist from '../todolist'
import FilterButtons from '../../components/filter_buttons'

function setup(todos = []) {
  const store = fakeStore({todos: {todos: todos}})
  const props = {
    params: { show: constants.SHOW_UNARCHIVED, due: constants.ALL, group: constants.ALL }
  }

  const todolist = mount(<Provider store={store}><Todolist {...props} /></Provider>)
  return { props, todolist }
}

describe("<Todolist />", () => {
  it("shows todos", () => {
    const { props, todolist } = setup([todoFixtures[0]])
    expect(todolist.find('h3').text()).toEqual('All todos')
    expect(todolist.find('p').text()).toEqual("Call with @Bob and @Frank about +bigProject")
  })

  it("shows 'No todos' if there are no todos", () => {
    const { props, todolist } = setup()
    expect(todolist.find('h3').text()).toEqual('All todos')
    expect(todolist.find('p').text()).toEqual("No todos.")
  })
})


