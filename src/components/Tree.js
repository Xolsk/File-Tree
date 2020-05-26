import React from 'react';

export default class Tree extends React.Component {

    state= {};

    dragOver = (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <div className="tree" onDragOver={this.dragOver} onDrop={this.props.dropBook}>
                <div>ROOT</div>
            </div>


        )
    }
}