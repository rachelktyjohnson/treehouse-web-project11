import SearchForm from "./SearchForm";
import MainNav from "./MainNav";

function Header(){
    return(
        <header>
            <SearchForm/>
            <MainNav/>
        </header>
    )
}

export default Header;