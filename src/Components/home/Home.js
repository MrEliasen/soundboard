/*
* @Author: Mark Eliasen
* @Date:   2017-03-28 16:51:40
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-06-09 12:11:24
*/

import React from 'react';
import SoundButton from './SoundButton';
import Sounds from '../../sounds.json';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            sounds: null,
            total: 0,
        };

        this.updateSoundCount = this.updateSoundCount.bind(this);
    }

    componentDidMount() {
        this.setState({sounds: Sounds});
        this.updateSoundCount();
    }

    updateSoundCount() {
        let total = 0;

        Sounds.map((s, k) => {
            s.sounds.map((sd, k2) => {
                total += 1;
            });
        });

        this.setState({total});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="section col-xs-24">
                        <h1>Simple Soundboard <small># of Sounds: {this.state.total}</small></h1>
                        <p>This soundboard will get updated over time as find things I find funny. Suggestions? Let me know on <a href="https://twitter.com/markeliasen" target="_blank">Twitter</a>.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="soundboard">
                    {
                        this.state.sounds &&
                        this.state.sounds
                        .map((s, k) => <div
                            key={k}
                            className="section col-xs-8"
                        >
                            <legend>{s.section}</legend>
                            {
                                s.sounds.map((sd, k2) => <SoundButton
                                    key={k2}
                                    title={sd.title}
                                    filename={sd.filename}
                                    volume={sd.volume || 0.5}
                                />)
                            }
                        </div>)
                    }
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
