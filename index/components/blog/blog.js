import React from 'react';
import './blog.scss';
import border from '../../../assets/imgs/border.png';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='blog'>
                <div id="small-stuff">SMALL STUFF</div>
                <div className='row'>
                    <div className='blog1'>
                        Coding Sketches
                    </div>
                    <div className='blog2'>
                        UX Design
                    </div>
                    <div className='blog3'>
                        Drawings
                    </div>
                    <img className="row-line" src={border}/>
                </div>
            </div>
        )
    }
}

export default Blog;