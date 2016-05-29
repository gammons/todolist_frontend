export default class Backend {
  constructor(store) {
    this.todoStore = store;
  }

  load() {
    console.log("Load");
  }

  save() {
    console.log("Save");
  }
}
