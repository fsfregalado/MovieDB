import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MovieResults from './containers/MovieResults';
import MovieDetails from "./containers/MovieDetails";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'



class App extends Component {



    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MovieResults}/>
                    <Route path="/movie/:idMovie/:title" exact component={MovieDetails}/>
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
