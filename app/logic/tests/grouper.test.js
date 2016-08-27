import expect from 'expect'
import Grouper from '../grouper'

describe('Grouper', () => {
  it('_getContexts', () => {
    const todos = [
      { contexts: ['one', 'two'] },
      { contexts: ['two', 'three'] },
      { contexts: ['three', 'four'] },
    ]
    const grouper = new Grouper(todos)
    expect(grouper.getContexts(todos)).toEqual(['one', 'two', 'three', 'four'])
  })

  it('_todosWithContext', () => {
    const todos = [
      { contexts: ['one', 'two'] },
      { contexts: ['two', 'three'] },
      { contexts: ['three', 'four'] },
    ]
    const grouper = new Grouper(todos)
    expect(grouper.todosWithContext('two')).toEqual([{ contexts: ['one', 'two'] }, { contexts: ['two', 'three'] }])
  })

  it('byContext', () => {
    const todos = [
      { contexts: ['one', 'two'] },
      { contexts: ['two', 'three'] },
      { contexts: ['three', 'four'] },
    ]
    const grouper = new Grouper(todos)
    const expected = [
      { title: 'one', todos: [{ contexts: ['one', 'two'] }] },
      { title: 'two', todos: [{ contexts: ['one', 'two'] }, { contexts: ['two', 'three'] }] },
      { title: 'three', todos: [{ contexts: ['two', 'three'] }, { contexts: ['three', 'four'] }] },
      { title: 'four', todos: [{ contexts: ['three', 'four'] }] },
    ]
    expect(grouper.byContext()).toEqual(expected)
  })

  it('byContext includes todos with no contexts', () => {
    const todos = [
      { contexts: ['one', 'two'] },
      { contexts: [] },
    ]
    const grouper = new Grouper(todos)
    const expected = [
      { title: 'one', todos: [{ contexts: ['one', 'two'] }] },
      { title: 'two', todos: [{ contexts: ['one', 'two'] }] },
      { title: 'No contexts', todos: [{ contexts: [] }] },
    ]
    expect(grouper.byContext()).toEqual(expected)
  })
})
