import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
//import axios from 'axios';

export default class NewPlaylist extends Component {

    constructor() {
        super();
        // this.state = {
        //     artists: [],
        //     userInput: ''
        // };

        // this.eventHandler = (event) => this.setState({userInput: event.target.value});
    }

    // componentDidMount() {
    //     axios
    //         .get('/api/artists')
    //         .then(res => res.data)
    //         .then(artists => this.setState({artists}));
    // }

    render() {

        // const artists = this
        //     .state
        //     .artists
        //     .filter((current) => current.name.match(this.state.userInput));

        return (
            <div className="well">
                <form className="form-horizontal">
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" onClick="/playlists" className="btn btn-success">Create Playlist</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
