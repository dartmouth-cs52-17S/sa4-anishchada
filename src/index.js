import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.search('pixar');
    this.search = debounce(this.search, 300);
  }

  search(text) {
    youtubeSearch(text).then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
  render() {
    return (
      <div id="main">
        <SearchBar onSearchChange={text => this.search(text)} />
        <div id="video-section">
          <div><VideoDetail video={this.state.selectedVideo} /></div>
          <div><VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} /></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));

// Cannot read config file: /Users/Anish/Desktop/CS52/sa4-anishchada/.eslintrc Error: duplicated mapping key at line 21, column 57: ... olved": [2, { "commonjs": true}], ^
// "import/no-unresolved": [2, { "commonjs": true}],
// Removed the above from line 21

// AIzaSyBfhGCeANsORrLEGIEHAr-B8HBtkiW5ETk
