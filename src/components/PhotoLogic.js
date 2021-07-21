import React from 'react';
import PhotoContainer from './PhotoContainer';
import axios from 'axios';
import apiKey from '../config.js';

class PhotoLogic extends React.Component{

    state = {
        query: this.props.match.params.query,
        photos: [],
        loading: true
    }

    componentDidMount() {
        this.handleSearch(this.props.match.params.query);
    }

    componentDidUpdate(prevProps) {
        let oldQuery = prevProps.match.params.query;
        let newQuery = this.props.match.params.query;
        if (oldQuery !== newQuery) {
            this.handleSearch(newQuery);
        }
    }

    handleSearch(query){
        this.setState({
            loading: true
        })
        let searchString = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&privacy_filter=1&safe_search=1&per_page=8&page=1&format=json&nojsoncallback=1`;
        axios.get(searchString)
            .then(response => {
                this.setState({
                    query: query,
                    photos: response.data.photos.photo,
                    loading:false
                })

            })
    }

    render() {
        return (

            <PhotoContainer
                query={this.state.query}
                photos={this.state.photos}
                loading={this.state.loading}/>
        )
    }
}

export default (PhotoLogic);