import React, {Component} from 'react';
import  '../css/MovieItem.css'
import SearchResults from "./SearchResults";

const api_key = "&api_key=2039021d2cc949065ad9fb862ad9fbb6";
const url_api = "https://api.themoviedb.org/3/search/movie?query=";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesquisado: [],
            pesquisa: ''
        };
    }

    func_pesquisar(query = '') {
        let url_search = url_api + query + api_key;
        fetch(url_search)
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
                    pesquisado: results
                });

            }).catch(error =>
            console.log('Exception to get Suggestions'));

    }

    updateSearch() {
        this.func_pesquisar(this.refs.query.value);
    }

    render() {
        const itens_pesquisados = this.state.pesquisado.slice(0, 3).map((movie) => {
            return (<SearchResults key={movie.id} movie={movie}/>)
        });

        return (
            <div>
                <nav style={{borderRadius: "0", width:'100%'}} className=" navbar navbar-inverse">
                    <div className="navbar-header">
                        <a href={"/"} className="navbar-brand">
                            MOVIE DB
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <form className="navbar-form" role="search">
                                <div className="input-group">

                                    <input
                                        type="text"
                                        ref={'query'}
                                        className="form-control"
                                        placeholder={'Search a Movie'}
                                        onChange={(e) => this.updateSearch()}
                                    />
                                </div>
                            </form>
                        </li>
                    </ul>
                </nav>
                <div className={'search_results'} style={{textAlign: 'left'}}>
                    {itens_pesquisados}
                </div>
            </div>

        )
    }

}


export default Nav;
