import expect from 'expect';
import Grouper from './Grouper';

describe('Grouper', () => {
  it("_getContexts", () => {
    let todos = [
      {contexts: ["one","two"]},
      {contexts: ["two","three"]},
      {contexts: ["three","four"]}
    ];
    let grouper = new Grouper(todos);
    expect(grouper._getContexts(todos)).toEqual(["one","two","three","four"]);
  });

  it("_todosWithContext", () => {
    let todos = [
      {contexts: ["one","two"]},
      {contexts: ["two","three"]},
      {contexts: ["three","four"]}
    ];
    let grouper = new Grouper(todos);
    expect(grouper._todosWithContext("two")).toEqual([{contexts: ["one","two"]},{contexts: ["two","three"]}]);
  });

  it("byContext", () => {
    let todos = [
      {contexts: ["one","two"]},
      {contexts: ["two","three"]},
      {contexts: ["three","four"]}
    ];
    let grouper = new Grouper(todos);
    let expected = [
      {title: "one", todos: [{contexts: ["one","two"]}]},
      {title: "two", todos: [{contexts: ["one","two"]}, {contexts: ["two","three"]}]},
      {title: "three", todos: [{contexts: ["two","three"]}, {contexts: ["three","four"]}]},
      {title: "four", todos: [{contexts: ["three","four"]}]}
    ]
    expect(grouper.byContext()).toEqual(expected);
  });
});

