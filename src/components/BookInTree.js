import React from "react";

export default class BookInTree extends React.Component {

    state = { parent: this.props.book.parent, children: [] , depth: this.props.depth || 10,draggable: undefined }

    componentDidMount() {

        if (this.props.book.title === "ROOT") {

            this.setState({ draggable: false });
        }
        else this.setState({ draggable: true });
    }

    startDrag = (event) => {

        event.stopPropagation();
        const book = JSON.stringify(this.props.book);
        event.dataTransfer.setData("drag-item", book);
        

       
    }

    dragOver = (event) => {
        event.preventDefault();
    }

    dropInTree = (event) => {


        event.stopPropagation();
        
        const draggedBook = JSON.parse(event.dataTransfer.getData("drag-item"));
        let children=this.state.children;
        children.push(draggedBook);
      
        this.props.setData(this.props.book, draggedBook);
        

    }


    render() {

        return (

            <div  style={{ marginLeft: this.state.depth }} onDragOver={this.dragOver} onDrop={this.dropInTree} draggable={this.state.draggable} onDragStart={this.startDrag}>

                {this.props.book.title}
                {this.state.children.map((book) => {
                   
                    return (
                        
                        <BookInTree draggable setData={this.props.setData} depth={this.state.depth + 20}  key={book.id} book={book}  />
                    )
                    
                })}

            </div>
        )
    }
}