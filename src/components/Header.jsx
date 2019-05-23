import React from 'react';
import Searchbar from './Searchbar';

import '../css/header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    render() {
        return(
            <header>
                <h1>
                    {this.name}
                </h1>
                <Searchbar/>
            </header>
        );
    }
}
