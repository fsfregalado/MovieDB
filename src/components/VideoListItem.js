import React from 'react';
import  '../css/MovieItem.css'



const VideoListItem = ({video}) => {
    return (
            <iframe title={video.etag} id={video.etag} width="210" height="100"
                    src={"https://www.youtube.com/embed/"+ video.id.videoId}>
            </iframe>
    );
};

export default VideoListItem;