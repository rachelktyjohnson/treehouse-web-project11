import {NavLink} from 'react-router-dom';

function MainNav(){
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/search/fish">Fish</NavLink></li>
                <li><NavLink to="/search/elephants">Elephants</NavLink></li>
                <li><NavLink to="/search/hippos">Hippos</NavLink></li>
            </ul>
        </nav>
    )
}

export default MainNav;