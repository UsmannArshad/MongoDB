import React,{useState} from "react";
import axios from "axios"
function App() {
const [cars,setCars]=useState([])
//INSERT THROUGH MONGOOSE
const addUser=()=>{
    axios.post('/api/cars',{
      brand:'Vigo',
      model:'new',
      year:2022,
      avail:true
    }).then(response=>{
      console.log(response.data)
    })
    .catch(()=>{
      console.log('CRAP')
    })
  }
  //GET THROUGH MONGOOSE
  const getCars=()=>{
    axios.get('/api/getCars')
    .then((response)=>setCars(response.data))
  }
  //Delete THROUGH MONGOOSE
  return (
    <div className="App">
      <button onClick={addUser}>
      Add Car</button>
      <button onClick={getCars}>Get Cars</button>
      {cars ? cars.map((item)=>(
        <div>{item.brand}</div>
      )):<h1>gg</h1>}
    </div>
  );
}

export default App;
