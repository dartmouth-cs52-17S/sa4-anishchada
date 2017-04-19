import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <div>
        <div id="img">
          <img src={imgUrl} alt="video" />
        </div>
        <div>{props.video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
