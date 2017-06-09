/*
* @Author: mark
* @Date:   2017-06-07 11:17:34
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-06-09 12:10:22
*/

import React from 'react';

class SoundButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ready: false,
        };

        this.sound = new Audio();
        this.sound.addEventListener('canplaythrough', () => {
            this.setState({ready: true});
        }, false);
        this.sound.addEventListener('play', () => {
            this.setState({playing: true});
        }, false);
        this.sound.addEventListener('ended', () => {
            this.setState({playing: false});
        }, false);
        this.sound.src = require('../../Sounds/' + props.filename);
        this.sound.volume = (props.volume ? props.volume : 0.5);
    }

    render() {
        return (
            <button
                className={
                    'btn ' +
                    (this.state.playing ? 'btn-success' : 'btn-default')
                }
                disabled={!this.state.ready}
                onClick={(e) => {
                    e.preventDefault();
                    this.sound.pause();
                    this.sound.currentTime = 0;
                    this.sound.play();
                }}
            >
                {!this.state.ready ? 'Loading' : this.props.title}
            </button>
        );
    }
};

export default SoundButton;
