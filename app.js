/* async function getFotos(){
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
}catch (err) {
    console.log("error ohh nooooo!")
    console.log(err)
}
} */

// Aqui estoy usando fastAPI from this website:
// https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))