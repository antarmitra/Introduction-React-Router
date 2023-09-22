import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.status || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to={'/'}> <button>Home</button> </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;