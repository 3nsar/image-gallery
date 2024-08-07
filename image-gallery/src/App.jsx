import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const App = () => {
  
  const [images, setImages] = useState([])
  const url = "https://picsum.photos/v2/list?page=2&limit=10"

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get(url)
      setImages(res.data)
      console.log(res.data)
    }
    fetchData()
  },[]) 

  return (
    <div>
      <h1>Hoc est porticus</h1>
      {images.map((image)=>(
        <div className='img-container'>
           <img src={image.download_url} alt="pic" height="200px"/>
        </div>
      ))}
    </div>
  );
};

export default App;