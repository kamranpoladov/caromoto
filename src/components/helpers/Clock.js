import React from 'react';

import formatAMPM from '../../utilities/formatAMPM';

export default class Clock extends React.Component {
    constructor() {
        super();

        this.state = {
            timeString: formatAMPM(new Date())
        };

        this.countMinute = this.countMinute.bind(this);
    };

    countMinute() {
        this.setState(() => ({timeString: formatAMPM(new Date())}));
    };

    componentWillMount() {
        setInterval(this.countMinute, 1000);
    };

    render() {
        return (
            <a className='header-text'>
                <span className='padding-small-right'>{this.state.timeString}</span>
                <i className="fas fa-angle-down"></i>
            </a>
        );
    };
}