import React, {Component} from 'react';
import '../App.css';
import MovieInfo from "../components/MovieInfo"
import RecommendationsItem from "../components/RecommendationsItem";
import CastItem from "../components/CastItem";
import '../css/MovieItem.css';
import YTSearch from 'youtube-api-search';
import VideoListItem from "../components/VideoListItem";
import Nav from "../components/Nav";



//url dos detalhes dos filmes
const api_detail="https://api.themoviedb.org/3/movie/";
const api_key= "?api_key=2039021d2cc949065ad9fb862ad9fbb6";

//url das recomendações dos filmes
const api_recommendations= "https://api.themoviedb.org/3/movie/";
const api_key_recommendations="/similar?api_key=2039021d2cc949065ad9fb862ad9fbb6&language=en-US&page=1&results=5";

//url do youtube
const api_yt="AIzaSyDLMtiuInqmjar3XEaNQapKXQ9w1Bc03K4";



class MovieDetails extends Component {

    constructor(props) {

        super(props);
        this.state = {
            details: [],
            recommendations: [],
            news: [],
            cast: [],
            videos: []

        };

        const id_movie = props.match.params.idMovie;
        console.log(id_movie);

        const title_name = props.match.params.title.replace(/[&\\#,()$~%.'":*?<>{}]/g, '');
        console.log(title_name);

        this.details = this.details.bind(this);
        this.details(id_movie);

        this.videoSearch(title_name + 'soundtrack');
        //Recommendations
        let url_recomendations = api_recommendations + id_movie + api_key_recommendations;
        fetch(url_recomendations)
            .then(response => response.json())
            .then(json => json.results)
            .then(data => {
                const results = data.slice(0, 7).map(movie => {
                    let temp = {};
                    temp.id = movie.id;
                    temp.title = movie.title;
                    temp.img = movie.poster_path;
                    temp.year = (movie.release_date === "") ? "0000" : movie.release_date.substring(0, 4);
                    return temp
                });
                this.setState({
                    recommendations: results
                });

            }).catch(error => console.log('Exception to get Suggestions'));

        //Cast
        let url_cast = api_detail + id_movie + "/casts" + api_key;
        console.log(url_cast);
        fetch(url_cast)
            .then(response => response.json())
            .then(json => json.cast)
            .then(data => {
                const results = data.slice(0, 5).map(actor => {
                    let temp = {};
                    temp.character = actor.character;
                    temp.name = actor.name;
                    temp.profile_path = actor.profile_path;
                    temp.id=actor.id;
                    return temp
                });
                this.setState({
                    cast: results
                });

            }).catch(error => console.log('Exception to get Suggestions'));


    }


    details = (id) => {

        const url= api_detail+id+api_key;

        console.log(url);

        const request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                const details_result = JSON.parse(request.response);
                //console.log('success', details_result);
                this.setState({
                    details: details_result
                });
                // console.log(this.state.details);
            } else {
                //console.warn('error');
            }

        };

        request.open('GET', url);
        request.send();
    };

    videoSearch(title_name) {

        //youtube search
        YTSearch({key: api_yt, term:title_name}, (videos) => {
            this.setState({
                videos:videos,
            });
            console.log(videos)

        });


    }

    render() {

        const itens = this.state.recommendations.map((movie) => {
            return (<RecommendationsItem clicked={this.state.details} key={movie.id} movie={movie}/>);

        });

        const itens_cast = this.state.cast.map((cast) =>{
            return(<CastItem cast={cast} key={cast.id}> </CastItem>)
        });

        const videoItems= this.state.videos.slice(0,3).map(video => {
            return (<VideoListItem key={video.etag} video={video}/>);
        });


        return (
            <div className={'App'}>
                <Nav/>
                <MovieInfo movie={this.state.details}/>
                <h3 className={'cast_txt'}>CAST</h3>
                <div id={'cast'}>{itens_cast}</div>
                <div id={'videos'}><p className={'video_txt'}>SOUNDTRACK</p>{videoItems} </div>
                <div id={'movie_recommendations'}><p className={'recommendations_txt'}>SUGGESTIONS</p>{itens}</div>
            </div>
        )
    }
}

export default MovieDetails;