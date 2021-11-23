import { useEffect, useState, useRef} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import SerachBar from './components/SearchBar';



function App() {
  const defaultURL = 'https://www.reddit.com/r/asreddit.json';
  const postsPerPage = 6;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(defaultURL);
  

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
  const handleSearchEvent = searchWord  => {
    setUrl(generateReqUrl(searchWord));
    fetchPosts();
 }
  
  return (
    <div className="container-fluid  mb-4  ">
          <h1 className="text-primary mb-3"> Ask Reddit</h1>
          <SerachBar   search={handleSearchEvent}/>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;