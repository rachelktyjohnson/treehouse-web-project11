import React from 'react';
import Photo from "./Photo";

class PhotoContainer extends React.Component{
    render() {
        let photosData;
        let header;
        if (this.props.photos.length > 0){
            //prep the gallery
            photosData = this.props.photos.map( photo =>
                <Photo
                    key={photo.id}
                    server={photo.server}
                    id={photo.id}
                    secret={photo.secret}
                />
            )
            header = "Results for '" + this.props.query +"'";
        } else {
            header = "No results found for '" + this.props.query + "'. Please try again!";
            photosData = "";
        }
        return(
            <div className="photo-container">
                {this.props.loading ? <h2>Loading...</h2> : <h2>{header}</h2>}
                {this.props.loading ? "" : <ul>{photosData}</ul>}
            </div>
        )
    }
}

export default PhotoContainer;