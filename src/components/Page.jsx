import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter } from '@fortawesome/free-brands-svg-icons';
import data from '../data/data';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            index: Math.floor(Math.random() * 7),
            bgColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState ({
            index: Math.floor(Math.random() * 7),
            bgColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
        })
    }

    render() {
        let quote = data[this.state.index];
        return (
            <div id='page-body' style={{backgroundColor: this.state.bgColor}}>
                <div id='quote-box' className='col'>
                    <div id='text' className='row'>{quote.quote}</div>
                    <div id='author' className='row'>{quote.person}</div>
                    <a id='tweet-quote' href="https://twitter.com/intent/tweet" style={{backgroundColor: this.state.bgColor}}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <button id='new-quote' onClick={this.handleClick} style={{backgroundColor: this.state.bgColor}}>New quote</button>
                </div>
            </div>
        )
    }
}

export default Page;