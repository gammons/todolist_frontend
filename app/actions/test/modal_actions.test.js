import * as actions from '../modal_actions'
import * as constants from '../../constants'
import expect from 'expect'

describe('openAlert()', () => {
  it('returns an object with type ALERT', () => {
    const ret = actions.openAlert("test")
    expect(ret).toEqual({type: constants.ALERT, body: "test"})
  })
})

