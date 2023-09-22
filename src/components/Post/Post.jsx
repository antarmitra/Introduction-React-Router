import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => { 
    const {id, title, body} = post;

    const navigate = useNavigate();
 

    const postStyle = {
        border: '2px solid blue',
        borderRadius: '10px',
        padding: '20px'
    }

    const handleClick = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Id: {id}</h2>
            <p>Title: {title}</p>
            <p>Description: {body}</p>
            <Link to={`/post/${id}`}>Show Post</Link>
            <Link to={`/post/${id}`}>
                <button>Click me</button>
            </Link>
            <button onClick={handleClick}>Click to see Details</button>
             
        </div>
    );
};

export default Post;