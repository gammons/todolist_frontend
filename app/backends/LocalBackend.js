import Backend from './Backend';

export default class LocalBackend extends Backend {
  load() {
    let p = new Promise((resolve, reject) => {
      fetch("http://localhost:7890/todos").then((resp) => {
        return resp.json();
      }).then((json) => {
        resolve(json)
      });
    });
    return p;
  }

  save(todos) {
    fetch('http://localhost:7890/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify(todos)
    })
  }
}
