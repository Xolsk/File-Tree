import React from "react";

export default class BookTree extends React.Component {

    state={children:[], depth: this.props.depth || 10}

    startDrag = (event) => {

        const book = JSON.stringify(this.props.book);
        event.dataTransfer.setData("drag-item", book);

    }

    dragOver = (event) => {
        event.preventDefault();
    }

    dropInside = (event) => {

        event.stopPropagation();
        const selectedBookJSON = event.dataTransfer.getData("drag-item");
        const selectedBook= JSON.parse(selectedBookJSON);
        const currentChildren = this.state.children;
        currentChildren.push(selectedBook);
        this.setState({children:currentChildren});
        this.props.removeFromList(selectedBook);
    
    }

    render() {

        return (

            <div style={{marginLeft:this.state.depth}} onDragOver={this.dragOver} onDrop={this.dropInside} draggable onDragStart={this.startDrag}>
                {this.props.book.title}
                <div>
                   { this.state.children.map((book)=>{
                       return(
                            <BookTree depth={this.state.depth+20} removeFromList={this.props.removeFromList} key={book.title} book={book}/>
                       )
                   })}
                </div>
            </div>
        )
    }
}