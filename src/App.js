import './App.css';
import Nav from './components/Nav';
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";

function App() {
    return (
        <div className="container">
            <SearchForm></SearchForm>
            <Nav></Nav>
            <PhotoContainer></PhotoContainer>


        </div>
    );
}

export default App;
