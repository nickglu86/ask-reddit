// const redditDomain = 'https://www.reddit.com'

const Post = ({post}) => {
    const {title, author, created : timestamp, num_comments : comments, ups , url} = post;
    const date = new Date(timestamp);
    return (  
        <article>
            <div className="user">
                {author}
            </div>
            <div className="date"> {date.toLocaleString()}</div>
            <h1 style={ title.length > 30 ? {fontSize : 20 } : {fontSize : 24 } }>
                {title.length > 100 ? title.slice(0,100) + '...' : title }
                </h1>
           
            <div className="metrics">
                <div className="ups">{ups}</div>
                <div className="comments">{comments}</div>
            </div>

           
            {/* <a href={url}>
                <button>Show The Post</button>
            </a> */}
        </article>
    );
}

export default Post;