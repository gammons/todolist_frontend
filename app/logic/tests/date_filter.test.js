import DateFilter from '../date_filter'
import expect from 'expect'
import moment from 'moment'

describe('DateFilter', () => {
  describe('Filter by day', () => {
    it('shows past todos that are not compconste', () => {
      const t1 = { subject: 'one', due: '2016-06-05', completed: false }
      const t2 = { subject: 'two', due: '2016-06-06', completed: false }
      const t3 = { subject: 'two', due: '2016-06-07', completed: false }
      const todos = [t1, t2, t3]

      const dateFilter = new DateFilter(todos)
      const results = dateFilter.filterByDay(moment('2016-06-06'))
      expect(results).toEqual([t1, t2])
    })

    it('does not show past todos that are compconste', () => {
      const t1 = { subject: 'one', due: '2016-06-05', completed: true }
      const t2 = { subject: 'two', due: '2016-06-06', completed: false }
      const t3 = { subject: 'two', due: '2016-06-07', completed: false }
      const todos = [t1, t2, t3]

      const dateFilter = new DateFilter(todos)
      const results = dateFilter.filterByDay(moment('2016-06-06'))
      expect(results).toEqual([t2])
    })
  })

  describe('Filter by week', () => {
    it('shows todos due during the week', () => {
      const t1 = { subject: 'one', due: '2016-06-05', completed: true }
      const t2 = { subject: 'two', due: '2016-06-06', completed: false }
      const t3 = { subject: 'three', due: '2016-06-07', completed: false }
      const todos = [t1, t2, t3]

      const dateFilter = new DateFilter(todos)
      const results = dateFilter.filterByWeek(moment('2016-06-06'))
      expect(results).toEqual([t1, t2, t3])
    })

    it('shows past todos that are not completed', () => {
      const t1 = { subject: 'one', due: '2000-01-05', completed: false }
      const t2 = { subject: 'two', due: '2016-06-06', completed: false }
      const t3 = { subject: 'three', due: '2016-06-07', completed: false }
      const todos = [t1, t2, t3]

      const dateFilter = new DateFilter(todos)
      const results = dateFilter.filterByWeek(moment('2016-06-06'))
      expect(results).toEqual([t1, t2, t3])
    })

    it('does not show todos that are ahead of the current week', () => {
      const t1 = { subject: 'two', due: '2016-06-06', completed: false }
      const t2 = { subject: 'two', due: '2016-06-11', completed: false }
      const t3 = { subject: 'three', due: '2016-06-12', completed: false }
      const todos = [t1, t2, t3]

      const dateFilter = new DateFilter(todos)
      const results = dateFilter.filterByWeek(moment('2016-06-06'))
      expect(results).toEqual([t1, t2])
    })
  })
})
