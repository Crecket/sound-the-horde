import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound">
            <div>
                <h1>Page not found!</h1>

                <Link className="" to="/">
                    Looking for the homepage?
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
