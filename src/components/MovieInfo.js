import React from 'react';
import  '../css/MovieItem.css'


const MovieInfo = (props) => {
    return (
        <div className={'filme_detail'}>
            <img src={'https://image.tmdb.org/t/p/w342/' + props.movie.poster_path} alt="movie_img"/>
            <div id={'texto'}> <h1>{props.movie.title}</h1>
                <h5 id={'subtitulo'}>{props.movie.tagline}</h5>
                <h3> SYNOPSIS</h3>
                <h4>{props.movie.overview}</h4>
                <h6 style={{marginTop:'20px'}}>RELEASE DATE:</h6> {props.movie.release_date}

                <p><i id={'icon_star'} className="glyphicon glyphicon-star"></i> {props.movie.vote_average}/10
                      <a style={{marginLeft:'10px'}} href={"http://www.imdb.com/title/" + props.movie.imdb_id} target="_blank">IMDB </a>
                </p>
            </div>
        </div>
    );
};

export default MovieInfo;