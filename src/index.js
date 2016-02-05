// Import Packages & Modules
import React, { Component} from 'react'; // Create and manage components
import ReactDOM from 'react-dom'; // Renders Components to the DOM
import YTSearch from 'youtube-api-search';

// Import componenets
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

/**
 * [const = ES6 declaring a variable (const means this is the final variable never gona change)]
 * @type {[variable]}
 */

// api key which will allow us to make requests to youtube (https://console.developers.google.com/s)
const API_KEY = 'AIzaSyBmDx_9BYbX9dxoMpiMS0KzupiDEH52YYg';


// Create a new component. This componenet should produce some HTML
class App extends Component {

	// When Page loads constructor will run & immediately invoke a search with the term surfboards.
	constructor(props) {
		super(props);

		// state starts as an empty array
		this.state = {
			videos: [],
			selectedVideo: null // When app loads our selected video is null
		};

		// state will then be updated with a search and the results will be passed to the array
		// Fires a request to go get a list of vidoes
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({
				videos: videos, // pass the list of videos onto this.state.videos
				selectedVideo: videos[0] // first video on the list will be set to selectedVideo
			});
			// Es6 this.setState({ videos: videos }) when the key & value are the same can use a single value { videos }
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				{/* pass the video details of the first video */}
				<VideoDetail video={this.state.selectedVideo}/>

				{/* pass the videos found in search to VideoList component by passing it as a prop */}
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} // function that updates app's state
					videos={this.state.videos} />
			</div>
		);
	}

}

// Take this component's generated HTML and put it on the DOM / Page
// Pass the instance via JSX tag & the target element
ReactDOM.render(<App />, document.querySelector('.container'));