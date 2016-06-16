import DateFilter from './DateFilter'
import expect from 'expect';
import moment from "moment";

describe("DateFilter", () => {
  describe("Filter by day", () => {
    it("shows past todos that are not complete", () => {
      let t1 = {subject: "one", due: "2016-06-05", completed: false};
      let t2 = {subject: "two", due: "2016-06-06", completed: false};
      let t3 = {subject: "two", due: "2016-06-07", completed: false};
      let todos = [t1, t2, t3];

      let dateFilter = new DateFilter(todos);
      let results = dateFilter._filterByDay(moment("2016-06-06"));
      expect(results).toEqual([t1,t2]);
    });

    it("does not show past todos that are complete", () => {
      let t1 = {subject: "one", due: "2016-06-05", completed: true};
      let t2 = {subject: "two", due: "2016-06-06", completed: false};
      let t3 = {subject: "two", due: "2016-06-07", completed: false};
      let todos = [t1, t2, t3];

      let dateFilter = new DateFilter(todos);
      let results = dateFilter._filterByDay(moment("2016-06-06"));
      expect(results).toEqual([t2]);
    });
  });

  describe("Filter by week", () => {
    it("shows todos due during the week", () => {
      let t1 = {subject: "one", due: "2016-06-05", completed: true};
      let t2 = {subject: "two", due: "2016-06-06", completed: false};
      let t3 = {subject: "three", due: "2016-06-07", completed: false};
      let todos = [t1, t2, t3];

      let dateFilter = new DateFilter(todos);
      let results = dateFilter._filterByWeek(moment("2016-06-06"));
      expect(results).toEqual([t1,t2,t3]);
    });

    it("shows past todos that are not completed", () => {
      let t1 = {subject: "one", due: "2000-01-05", completed: false};
      let t2 = {subject: "two", due: "2016-06-06", completed: false};
      let t3 = {subject: "three", due: "2016-06-07", completed: false};
      let todos = [t1, t2, t3];

      let dateFilter = new DateFilter(todos);
      let results = dateFilter._filterByWeek(moment("2016-06-06"));
      expect(results).toEqual([t1,t2,t3]);
    });

    it("does not show todos that are ahead of the current week", () => {
      let t1 = {subject: "two", due: "2016-06-06", completed: false};
      let t2 = {subject: "two", due: "2016-06-11", completed: false};
      let t3 = {subject: "three", due: "2016-06-12", completed: false};
      let todos = [t1, t2, t3];

      let dateFilter = new DateFilter(todos);
      let results = dateFilter._filterByWeek(moment("2016-06-06"));
      expect(results).toEqual([t1,t2]);
    });
  });
});

