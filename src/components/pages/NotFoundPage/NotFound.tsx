import React from "react";
import { HOME_PAGE } from "../../../constants/routes";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
    return(
        <div className="not-found">
            <h1>This page doesnot exist, go back to <a href={HOME_PAGE}>HomePage</a></h1>
        </div>
    )
}

export default NotFound;
