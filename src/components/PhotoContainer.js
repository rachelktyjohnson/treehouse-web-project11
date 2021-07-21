import React from 'react';
import Photo from "./Photo";

class PhotoContainer extends React.Component{
    render() {
        let photosData;
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
        } else {
            photosData = <h1>Oh no, no photos found</h1>
        }
        return(
            <div className="photo-container">
                {this.props.loading ? <h2>Loading...</h2> : <h2>Results for "{this.props.query}"</h2>}
                {this.props.loading ? "" : <ul>{photosData}</ul>}
            </div>
        )
    }
}

export default PhotoContainer;