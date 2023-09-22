import { useLoaderData } from "react-router-dom";

const ShowDetailsUser = () => {
    const user = useLoaderData ();
    const {name, website} = user
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default ShowDetailsUser;