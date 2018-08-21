import React from 'react';
import './about.scss';
import about_content from './about.json';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.content = about_content.intro;
    }

    render() {
        return (
            <div className='about row'>
                <div className='interaction'>
                    img
                </div>
                <div className='description'>
                    {this.content}
                </div>
            </div>
        )
    }
}

export default About;