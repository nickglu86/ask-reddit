const redditDomain = 'https://www.reddit.com'
const Post = ({post}) => {
    return (  
        <article>
            <div>{post.title}</div>
            <a href={`${redditDomain}${post.permalink}`}>Link</a>
        </article>
    );
}

export default Post;