import { useState } from 'react';
import './App.css';

function App() {
  let[data, setData] = useState([])
  let[text, setText] = useState("");
  let storeValue = (event)=>{
    let currentValue = event.target.value;
    setText(currentValue);
  }
  let storeData = (e)=>{
   
    let updatedData=[...data, text]
    setData(updatedData)
    e.preventDefault()
    

  }
  let filteredData = (index)=>{
    let oldData = data
    let filtered = oldData.filter((v,i)=> index!=i)
    setData(filtered)


  }
  return (
    <>
      <form onSubmit={storeData} action="">
        <textarea onChange={storeValue} value={text} name="message" cols="40" rows="10"></textarea><br/>
        <button>Submit</button>
      </form>
      <div className="par">
          {data.map((v,i)=>{
            return(
            <p className='data'>{v}<span onClick={()=>filteredData(i)}>&times;</span></p>)})}
      </div>
    </>
  );
}

export default App;
