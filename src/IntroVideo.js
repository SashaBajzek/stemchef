import React from 'react';
import Youtube from 'react-youtube';

class IntroVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: 'G8Q4YfWwRTE',
      player: null
    };

    this.onReady = this.onReady.bind(this);
  }

  onReady(event) {
    this.setState({
      player: event.target,
    });
  }

  render() {
    return (
      <div>
        <Youtube videoId={this.state.videoId} onReady={this.onReady} />
      </div>
    );
  }
}

export default IntroVideo;