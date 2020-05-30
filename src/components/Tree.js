import React from 'react';
import BookInTree from "./BookInTree"

export default class Tree extends React.Component {

    state={children:[]};

    dragOver = (event) => {
        event.preventDefault();
    }

    dropInRoot=(event)=>{

        event.stopPropagation();
        const draggedBook = JSON.parse(event.dataTransfer.getData("drag-item"));
        let children=this.state.children;
        children.push(draggedBook);
        this.props.setData("ROOT", draggedBook);
    }

    render() {

        return (
            <div className="tree" onDragOver={this.dragOver} onDrop={this.dropInRoot}>

                <div>ROOT</div>
                {this.props.booksInTree.map((book) => {

                    if (book.inList === "false" && book.parent==="ROOT") {

                        return (<BookInTree   key={book.id} book={book} setData={this.props.setData} />)

                    }
                })
                }
            </div>


        )
    }
}