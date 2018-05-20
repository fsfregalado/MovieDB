import React, {Component} from 'react';
import '../App.css';
import MovieItem from "../components/MovieItem";
import Nav from "../components/Nav";
//import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const api = "https://api.themoviedb.org/3/discover/movie";
export const API_KEY_ALT = '?api_key=2039021d2cc949065ad9fb862ad9fbb6';

class MovieResults extends Component {


    constructor(props) {

        super(props);
        this.state = {
            suggestions: []
        };

        let url = api + API_KEY_ALT;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(json => json.results)
            .then(data => {
                const results = data.map(movie => {
                    let temp = {};
                    temp.id = movie.id;
                    temp.title = movie.title;
                    temp.img = movie.poster_path;
                    temp.year = (movie.release_date === "") ? "0000" : movie.release_date.substring(0, 4);
                    return temp
                });
                this.setState({
                    suggestions: results
                });

            }).catch(error => console.log('Exception to get Suggestions'));

    }


    render() {
        const itens = this.state.suggestions.map((movie) => {
            return (<MovieItem key={movie.id} movie={movie}/>);
        });

        return (
            <div className={'App'}>
                <Nav/>
                <div id={'movies'}>
                    {itens}
                </div>
            </div>
        )
    }
}

export default MovieResults;