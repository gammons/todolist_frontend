import Backend from './Backend';

export default class LocalBackend extends Backend {
  load() {
    let p = new Promise((resolve, reject) => {
      fetch("http://localhost:7890/todos").then((resp) => {
        return resp.json();
      }).then((json) => {
        resolve(json)
      }).catch((error) => { reject(error) });
    });
    return p;
  }

  save(todos) {
    let p = new Promise((resolve, reject) => {
      fetch('http://localhost:7890/todos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify(todos)
      }).then((resp) => {
        resolve(resp);
      }).catch((error) => { reject(error) });
    });
    return p;
  }
}
