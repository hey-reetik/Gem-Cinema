import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
    const opts = {
        playerVars: {
            modestbranding: 0, // Hides the YouTube logo
        },
    };

    const onReady = (event) => {
        // Access to player in all event handlers via event.target
        event.target.playVideo();
    };

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
        />
    );
};

export default VideoPlayer;
