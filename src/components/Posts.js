import '../styles/Posts.css'
import React from "react";
import Post from "../components/Post";

const Posts = ({ posts, loading, currentPage, postsPerPage }) => {
    const indexLastPost = currentPage * postsPerPage;
    const indexFistPost = indexLastPost - postsPerPage;
    const currentPosts = posts.slice(indexFistPost, indexLastPost);

    if(loading){
        return (
            <div className="w-100 mt-5 mb-5 d-flex justify-content-center">
                  <div className="spinner-border text-info" role="status"></div>
            </div>
        );
    }
    else {
        return ( 
            <ul className="list-group mb-4 flex-row flex-wrap justify-content-around"> 
                { currentPosts.map( (post, index) => (
                        <Post key={index} post={post.data} />
                    )
                )}
            </ul>
         );
    }

 

}

export default Posts;