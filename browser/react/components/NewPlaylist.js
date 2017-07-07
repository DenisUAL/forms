import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';

export default class NewPlaylist extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: '',
            notValid: true
        };

        this.handleChange = (event) => {
            this.setState({inputValue: event.target.value});
            (event.target.value.length > 0 && event.target.value.length <= 16)
                ? this.setState({notValid: false}) : this.setState({notValid: true})
            // if (!event.target.value || event.target.value > 16) {
            //     document.getElementsByClassName("btn-success").disabled = true;
            // } else {
            //     document.getElementsByClassName("btn-success").disabled = false;
            // }

        }
        this.handleSubmit = (event) => {
            this.setState({inputValue: ''})
            this.setState({notValid: true})
            console.log("Value:",this.state.inputValue)
            event.preventDefault();

            const postObj = {name: this.state.inputValue}
            axios.post('/api/playlists', postObj)
            .then(res => res.data)
            .then(result => {
                console.log(result) // response json from the server!
            });

        }
    }

    // componentDidMount() {
    //     const postObj = {name: this.state.inputValue}
    //     axios.post('/api/playlists', postObj)
    //     .then(res => res.data)
    //     .then(result => {
    //         console.log(result) // response json from the server!
    //     });
    // }

    render() {

        return (
            <div className="well">
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input className="form-control" placeholder="Please enter a playlist name"
                                    type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                {(this.state.notValid && this.state.inputValue.length > 0)
                                    ? <div className="alert alert-warning">
                                        Please provide name under 16 characters
                                    </div>
                                    : ""}
                                <button type="submit" className="btn btn-success"
                                    disabled={this.state.notValid}
                                    >Create Playlist
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
