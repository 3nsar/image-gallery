import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const App = () => {
  /*
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
    <div className='container'>
      <h1>Hoc est porticus</h1>
      <div className='img-container'>
      {images.map((image)=>(
           <img src={image.download_url} alt="pic" height="200px"/>
      ))}
      </div>
    </div>
    
  );
  
*/

  const [images, setImages] = useState([])
  const URL = "https://picsum.photos/v2/list?page=2&limit=10"

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await axios.get(URL)
      console.log(res.data)
      setImages(res.data)
    }
    fetchData()
  },[])

  return(
    <div>
      {images.map((image)=>(
        <h1>{image.author}</h1>
      ))}
    </div>
  )


}

export default App;