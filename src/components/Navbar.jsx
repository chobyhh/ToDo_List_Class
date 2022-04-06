import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <i className='navbar-logo fa-solid fa-igloo'></i>
                <span> To Do List </span>
                <span className='navbar-count'>{this.props.totalCount}</span>
            </div>
        );
    }
}

export default Navbar;