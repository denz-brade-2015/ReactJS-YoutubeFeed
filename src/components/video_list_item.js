import React, { Component} from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
	// {video} same as 'const video = props.video'
	// (has property video, grab that video declare new variable called 'video')


	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		// Whenever li is clicked call the function with the video that it was passed
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;