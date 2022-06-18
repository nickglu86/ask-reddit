import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import SerachBar from './components/SearchBar';
import Header from './components/Header';

const defaultURL = 'https://www.reddit.com/r/askreddit.json';
const postsPerPage = 6;

function App() {
   
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchWord, setSearchWord] = useState('askreddit');
  
  const fetchPosts = async () =>  {
    setLoading(true);
    const response = await axios.get('https://www.reddit.com/r/'+ searchWord +'.json');
    setPosts(response.data.data.children);
    setLoading(false);
    setCurrentPage(1)
  }
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  } 
  // const generateReqUrl = keyword =>{
  //     return 'https://www.reddit.com/r/'+ keyword +'.json';
  // }
  // const handleSearchEvent = (searchWord) => {
  //   setUrl(generateReqUrl(searchWord));
  //   fetchPosts();
  //   setCurrentPage(1)
  //   console.log('handleSearchEvent')
  // }

  useEffect(() => {
    fetchPosts();
  }, [searchWord])

  return (
    <>
      <Header />
      <main className="container-fluid mb-4">
            <SerachBar   search={setSearchWord}/>
            <Posts 
                posts={posts} 
                loading={loading} 
                currentPage={currentPage} 
                postsPerPage={postsPerPage}
             />
            <Pagination 
                postsPerPage={postsPerPage} 
                totalPosts={posts.length} 
                paginate={paginate} 
             />
      </main>
    </>
  );
}

export default App;
