import React from 'react';
import './work.scss';
import { Link } from "react-router-dom";

import border from '../../../assets/imgs/border.png';
import arrow from '../../../assets/imgs/arrow.png';

import brick_thumb from '../../../assets/imgs/thumbnails/brick_thumb.png';
import tilt_thumb from '../../../assets/imgs/thumbnails/tilt_thumb.png';
import frankenstein_thumb from '../../../assets/imgs/thumbnails/frankenstein_thumb.png';
import thumb_frame from '../../../assets/imgs/thumbnails/thumb_frame.png';

import brick_content from '../../../pages/brick/brick.json';
import tilt_content from '../../../pages/tilt/tilt.json';
import frankenstein_content from '../../../pages/frankenstein/frankenstein.json';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='work'>
                <div id="work">FEATURED WORKS</div>
                <div className="row">
                    <div className='dev1'>
                        <Link to="/brick" ><img className="thumb-frame" src={thumb_frame} />
                            <img className="thumb-img" src={brick_thumb} />
                            <div className="overlay">
                            <div className="overlay-content"><strong>{brick_content.title}</strong>
                            <br/><br/>{brick_content.summary}
                            </div></div></Link>
                    </div>

                    <div className='dev2'>
                        <Link to="/tilt"><img className="thumb-frame" src={thumb_frame} />
                            <img className="thumb-img" src={tilt_thumb} />
                            <div className="overlay">
                            <div className="overlay-content"><strong>{tilt_content.title}</strong>
                            <br/><br/>{tilt_content.summary}
                            </div></div></Link>
                    </div>

                    <div className='dev3'>
                        <Link to="/frankenstein"><img className="thumb-frame" src={thumb_frame} />
                            <img className="thumb-img" src={frankenstein_thumb} />
                            <div className="overlay">
                            <div className="overlay-content"><strong>{frankenstein_content.title}</strong>
                            <br/><br/>{frankenstein_content.summary}
                            </div></div></Link>
                    </div>

                    <div className="readmore"><p className="see-more"><Link to="/works">SEE MORE</Link></p>
                        <Link to="/works"><img className="arrow" src={arrow} ></img></Link>
                    </div>
                    <img className="row-line" src={border} />
                </div>
            </div>
        );
    }
}

export default Work;