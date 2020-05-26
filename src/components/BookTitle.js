import React from "react";

export default class BookTitle extends React.Component{

    startDrag = (event) => {

        const title = JSON.stringify(this.props.title);
        event.dataTransfer.setData("drag-item", title);

    }


    render(){

        return(

            <div draggable onDragStart={this.startDrag}> {this.props.title}</div>
        )
    }
}