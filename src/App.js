import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import PhotoLogic from "./components/PhotoLogic";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search/:query" component={PhotoLogic}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
