// API for get requests
let fetchRes = fetch(
  "https://pokedex-39bba-default-rtdb.firebaseio.com/");
      
  // FetchRes is the promise to resolve
  // it by using.then() method
  fetchRes.then(res =>
      res.json()).then(d => {
          console.log(d)
      })