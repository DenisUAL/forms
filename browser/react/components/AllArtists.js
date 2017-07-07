import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllArtists extends Component {

  constructor () {
    super();
    this.state = {
      artists: [],
      userInput: ''
    };

    this.eventHandler = (event) => this.setState({userInput: event.target.value});
  }

  componentDidMount () {
    axios.get('/api/artists')
      .then(res => res.data)
      .then(artists => this.setState({ artists }));
  }

  render () {
    
    const artists = this.state.artists.filter((current) => current.name.match(this.state.userInput));

    return (
      <div>
      <form className="form-group" style={{marginTop: '20px'}}>
          <input 
            className="form-control" 
            placeholder="Enter artist name"
            onChange={this.eventHandler}
          />
        </form>
        <h3>Artists</h3>
        <div className="list-group">
          {
            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
                </div>
              );
            })
          }
        </div>
        
      </div>
    );
  }
}
