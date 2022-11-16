import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter } from '@fortawesome/free-brands-svg-icons';
import data from '../data/data';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            index: Math.floor(Math.random() * 8)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState ({
            index: Math.floor(Math.random() * 7)
        })
    }

    render() {
        let quote = data[this.state.index];
        return (
            <div id='quote-box' className='col'>
                <div id='text' className='row'>{quote.quote}</div>
                <div id='author' className='row'>{quote.person}</div>
                <a id='tweet-quote' href="https://twitter.com/intent/tweet">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <button id='new-quote' onClick={this.handleClick}>New quote</button>
            </div>
        )
    }
}

export default Page;