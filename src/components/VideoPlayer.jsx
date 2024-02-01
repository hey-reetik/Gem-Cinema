import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
    const opts = {
        width: '1300', // Set the width of the player
        height: '700', // Set the height of the player
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
