import React from 'react';
import  '../css/MovieItem.css'


const CastItem = (props) => {

    if (props.cast.profile_path==null){
        var SRC_IMAGE='http://blog.springfield.k12.or.us/epage/files/2017/02/person-placeholder-4.png';
    }
    else {
         SRC_IMAGE='https://image.tmdb.org/t/p/w264_and_h264_bestv2/'+props.cast.profile_path;

    }


    return (
        <div className={'cast'} >
            <div className='div_imagem'>
                <img className='img-circle' src={SRC_IMAGE} alt="movie_img"/>
            </div>
                <h3>{props.cast.character}</h3>
                <p>{props.cast.name}</p>
        </div>
    );
};

export default CastItem;