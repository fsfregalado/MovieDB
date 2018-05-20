import React from 'react';
import  '../css/MovieItem.css'
import {Link} from 'react-router-dom';


const MovieItem = (props) => {
    return (
        <div className={'filmes'}>
            <Link to={'/movie/'+ props.movie.id + '/' + props.movie.title}>
                <li>
                    <img src={'https://image.tmdb.org/t/p/w342/' + props.movie.img} alt="movie_img"/>
                    <h1 >{props.movie.title}</h1>
                </li>
            </Link>
        </div>
    );
};

export default MovieItem;