import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 37.814721, lng: -121.998094},
    zoom: 10
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
				bootstrapURLKeys={{key:"AIzaSyBZrKNJzt7300jm3RiaaFdgYqgXeJ9XcjU"}}
      >

      </GoogleMapReact>
    );
  }
}