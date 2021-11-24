const Post = ({post}) => {
    const {title, author, created : timestamp, num_comments : comments, ups , url} = post;
    
    const getTime = timeFull => {
        let time12h = timeFull.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const [time, modifier] = time12h.split(' ');   
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
          hours = '00';
        }
        if (modifier === 'PM') {
          hours = parseInt(hours, 10) + 12;
        }
        return `${hours}:${minutes}`;
    }

    const getDate  = timestamp => {
        let dateObj = new Date(timestamp);
        let time = getTime(dateObj);
        let date = dateObj.toLocaleDateString("en-GB");
        return `${time} ${date}`;
    }
     
    return (  
        <li className="list-group-item">
            <div className="user">
                {author}
            </div>
            <div className="date"> {getDate(timestamp)}</div>
            <h1 style={ title.length > 30 ? {fontSize : 20 } : {fontSize : 24 } }>
                {title.length > 80 ? title.slice(0,80) + '...' : title }
                </h1>
            <div className="metrics">
                <div className="ups">{ups}</div>
                <div className="comments">{comments}</div>
            </div>
            <a href={url} target="_blank">
                <button className="btn btn-light">Show on Reddit</button>
            </a> 
        </li>
    );
}

export default Post;