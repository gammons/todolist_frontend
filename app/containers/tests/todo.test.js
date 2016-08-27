import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import { fakeStore } from '../../test/test_helper'
import moment from 'moment'

import Todo from '../todo'

function setup(todo) {
  return render(<Provider store={fakeStore()}><Todo todo={todo} /></Provider>)
}

describe('<Todo />', () => {
  describe('Completed checkbox', () => {
    it('is checked when completed is true', () => {
      const todoComponent = setup({ subject: 'is complete', completed: true })
      expect(todoComponent.find('input')).to.be.checked()
    })

    it('is unchecked when completed is false', () => {
      const todoComponent = setup({ subject: 'is not complete', completed: false })
      expect(todoComponent.find('input')).to.not.be.checked()
    })
  })

  describe('Archive todo menu item', () => {
    it('Shows "Archive" when the todo is not archived', () => {
      const todoComponent = setup({ subject: 'unarchived', archived: false })
      expect(todoComponent.find('ul[class="dropdown-menu"]')).to.have.text().match(/Archive/)
    })

    it('Shows "Un-archive" when the todo is archived', () => {
      const todoComponent = setup({ subject: 'archived', archived: true })
      expect(todoComponent.find('ul[class="dropdown-menu"]')).to.have.text().match(/Un-archive/)
    })
  })

  describe('Showing due dates', () => {
    it('shows "Today" if the due date is today', () => {
      const todoComponent = setup({ subject: 'archived', archived: true, due: moment().format('YYYY-MM-DD') })
      expect(todoComponent.find('small')).to.have.text('Today')
    })

    it('shows "Tomorrow" if the due date is tomorrow', () => {
      const todoComponent = setup({ subject: 'archived', archived: true, due: moment().add(1, 'day').format('YYYY-MM-DD') })
      expect(todoComponent.find('small')).to.have.text('Tomorrow')
    })

    it('shows a regular date if it\'s not today or tomorrow', () => {
      const todoComponent = setup({ subject: 'archived', archived: true, due: '2016-08-23' })
      expect(todoComponent.find('small')).to.have.text('Tue Aug 23')
    })
  })
})
