import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Post from './Post'; 

function App() {
  const url = 'https://www.reddit.com/r/crypto.json';
  const [data, setData] = useState();
 
  const getData = () =>  {
    const fetchData = async () => {
      await axios
        .get(url)
        .then(response => {
          setData(response.data.data.children);
          console.log(response.data.data.children);
        })
        .catch(error => {

        })      
        .finally(() => {

        });
    };
    fetchData();
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
          <h1> Ask Reddit</h1>

          <div> 
                   {data && data.map( (post, index) => { 
                     return(
                      <Post key={index} post={post.data} />
                     )
                   })}
          </div>
    </div>
  );
}

export default App;
