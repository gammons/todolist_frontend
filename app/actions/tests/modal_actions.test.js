import * as actions from '../modal_actions'
import * as constants from '../../constants'
import { expect } from 'chai'

describe('openAlert()', () => {
  it('returns an object with type ALERT', () => {
    const ret = actions.openModal('test')
    expect(ret).to.eql({ type: constants.MODAL, component: 'test' })
  })
})
