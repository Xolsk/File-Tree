import React from 'react';
import BookInTitle from "./BookInTitle";


export default class ItemList extends React.Component {

    dragOver = (event) => {
 
        event.preventDefault();
        
    }

    dropBack=(event)=>{

        const draggedBook = JSON.parse(event.dataTransfer.getData("drag-item"));
        this.props.setBack(draggedBook);

    }

    render() {
        return (
            <div onDragOver={this.dragOver} onDrop={this.dropBack}  className="itemList" >
                
                {this.props.booksInList.map((book) => {
       
                    if (book.inList==="true") {
                        
                        return (<BookInTitle key={book.id} book={book}/>)
                    
                    }
                })
                }
            </div>

        )
    }
}