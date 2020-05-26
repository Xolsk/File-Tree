import React from "react";

export default class BookTree extends React.Component {

    state={children:[]}

    startDrag = (event) => {

        const book = JSON.stringify(this.props.book);
        event.dataTransfer.setData("drag-item", book);

    }

    dragOver = (event) => {
        event.preventDefault();
    }

    dropInside = (event) => {
        const selectedBookJSON = event.dataTransfer.getData("drag-item");
        const selectedBook= JSON.parse(selectedBookJSON);
        const currentChildren = this.state.children;
        currentChildren.push(selectedBook);
        this.setState({children:currentChildren});
        this.props.removeFromList(selectedBook);
    
    }

    render() {

        return (

            <div onDragOver={this.dragOver} onDrop={this.dropInside} draggable onDragStart={this.startDrag}>
                {this.props.book.title}
            </div>
        )
    }
}