import { useEffect, useState, useRef} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';



function App() {
  const defaultURL = 'https://www.reddit.com/r/asreddit.json';
  const postsPerPage = 12;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(defaultURL);
  const nameForm = useRef(null);

  const fetchPosts = async () =>  {
    setLoading(true);
    const response = await axios.get(url);
    setPosts(response.data.data.children);
    setLoading(false);
}
  useEffect( () => {
  fetchPosts();
  
  }, [url])


  const indexLastPost = currentPage * postsPerPage;
  const indexFistPost = indexLastPost - postsPerPage;
  const currentPosts = posts.slice(indexFistPost, indexLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }
  const generateReqUrl = keyword =>{
      return 'https://www.reddit.com/r/'+ keyword +'.json';
  }
  const handleClickEvent = () => {
    const form = nameForm.current;
    setUrl(generateReqUrl(form['searchword'].value));
   fetchPosts();
 }
  
  return (
    <div className="container-fluid  mb-4  ">
          <h1 className="text-primary mb-3"> Ask Reddit</h1>
          <div className="form-group ">
          <form ref={nameForm}>
            <input ref={nameForm} name="searchword" type="text" className="form-control" />
          </form>  
            <button type="submit" className="btn btn-primary mb-2" onClick={handleClickEvent}>Search</button>
          </div>
 
          <Posts posts={currentPosts} loading={loading} />
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
