import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const ShowDetailsPost = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title} = post;

    console.log(postId);
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Title: {title}</h2>
            <p>Id: {id}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default ShowDetailsPost;