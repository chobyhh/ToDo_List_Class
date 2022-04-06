import React, { Component } from 'react';

class HabitAdd extends Component {

    inputRef = React.createRef();
    onSubmit = event => {
        event.preventDefault();
        //console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
    }

    render() {
        return (
            <form className='add-form' onSubmit={this.onSubmit}>
                <input 
                ref={this.inputRef}
                type="text" 
                className='add-input'
                placeholder='To-Do 입력' />
                <button className='add-button'>Add</button>
            </form>
        );
    }
}

export default HabitAdd;