/*
* @Author: Mark Eliasen
* @Date:   2017-03-28 16:51:40
* @Last Modified by:   mark
* @Last Modified time: 2017-06-07 12:41:34
*/

import React from 'react';
import SoundButton from './SoundButton';
import Sounds from '../../sounds.json';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            sounds: null,
        };
    }

    componentDidMount() {
        this.setState({sounds: Sounds});
    }

    render() {
        return (
            <div className="container">
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
