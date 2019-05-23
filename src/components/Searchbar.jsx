import React from 'react';

import '../css/searchbar.css';

export default class Searchbar extends React.Component {
    render() {
        return(
            <div className="searchbar-form">
                <form novalidate>
                    <div className="searchbar-wrapper">
                        <input type="text" className="searchbar"/>
                    </div>
                </form>
            </div>
        );
    }
}
