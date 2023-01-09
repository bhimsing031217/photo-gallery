import React,{useState} from 'react';
import './App.css';
// qvtpasPBLYFgnXKaX3flSy8kBJTpAz_7FCvxk3-oH9s
function App() {
  const [value,setValue] =useState("")
  const[results,setResults]=useState([])

  const fetchImages =()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=qvtpasPBLYFgnXKaX3flSy8kBJTpAz_7FCvxk3-oH9s&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <div className="mydiv">
        <span>search</span>
        <input style={{width:"60%"}} type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>fetchImages()}>send</button>
      </div>
      <div className='gallery'>
        {
          results.map((item)=>{
            return <img  className="item" key={item.id} src={item.urls.regular}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
