import {NavLink} from "react-router-dom";

function PageNotFound(){
    return(
        <div>
            <h2>Oops, that page doesn't exist.</h2>
            <NavLink to="/">Go back to civilization</NavLink>
        </div>
    )
}

export default PageNotFound;