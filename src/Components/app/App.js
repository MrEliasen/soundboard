/*
* @Author: mark
* @Date:   2017-03-01 15:31:23
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-30 00:07:41
*/

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* Styling */
import '../../Assets/styles/App.scss';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            user: null,
        };

        injectTapEventPlugin();
    }

    render() {
        return(
            <div>
                {
                    this.props.children &&
                    React.cloneElement(this.props.children, {
                        user: this.state.user,
                    })
                }
            </div>
        );
    }
}

export default App;
