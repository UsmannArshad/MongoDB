import React from "react";
import axios from "axios"

function App() {
  const addUser=()=>{
    axios.get('/api/users').
    then(response=>{
      console.log(response.data)
    })
    .catch(()=>{
      console.log('CRAP')
    })
  }
  return (
    <div className="App">
      <button onClick={addUser}>
      AddUser</button>
    </div>
  );
}

export default App;
