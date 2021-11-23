import React from "react";
import Post from "../components/Post";

const Posts = ({ posts, loading }) => {
    if(loading){
        return (
            <div class="spinner-border text-info" role="status">
            </div>
        );
    }
 
    return ( 
        <ul className="list-group mb-4 flex-row flex-wrap justify-content-center"> 
            { posts.map( (post, index) => (
                    <Post key={index} post={post.data} />
                )
            )}
        </ul>
     );
}

export default Posts;