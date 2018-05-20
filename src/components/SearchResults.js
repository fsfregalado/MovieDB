import React from 'react';
import  '../css/MovieItem.css'


const SearchResults = (props) => {
    return (
        <div className={'search_results'} style={{textAlign:'left', marginLeft:'150px'}}>
            <a style={{display:'inline'}} href={'/movie/'+ props.movie.id + '/' + props.movie.title}>
            <li className="list-unstyled">
                    <div style={{display:'inline', width:'50px'}}>
                        <img alt='movie_img' style={{width:'3%', marginRight:'20px', marginLeft:'0px'}} src={'https://image.tmdb.org/t/p/w342/'+props.movie.img}/>
                        <h6 style={{display:'inline'}}>{props.movie.title}</h6>
                    </div>
            </li>
            </a>
        </div>

    );
};

export default SearchResults;