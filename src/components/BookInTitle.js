import React from "react";

export default class BookTitle extends React.Component{

    startDrag = (event) => {

        const book = JSON.stringify(this.props.book);
        event.dataTransfer.setData("drag-item", book);
  

    }


    render(){

        return(

            <div draggable onDragStart={this.startDrag}>{this.props.book.title}</div>
        )
    }
}