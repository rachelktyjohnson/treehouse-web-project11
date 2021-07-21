import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
