import React from 'react';
import  '../css/MovieItem.css'
import {Link} from 'react-router-dom';


const RecommendationsItem = (props) => {

    return (
        <div className={'recommendations'}>
            <Link to={'/movie/'+ props.movie.id + '/'+ props.movie.title}>
                <img onClick={props.clicked} src={'https://image.tmdb.org/t/p/w342/' + props.movie.img} alt="movie_img"/>
            </Link>
        </div>
    );

};

export default RecommendationsItem;