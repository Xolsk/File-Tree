import React from 'react';
import BookInTitle from "./BookInTitle";


export default class ItemList extends React.Component {

    dragOver = (event) => {
 
        event.preventDefault();
        
    }

    render() {
        return (
            <div onDragOver={this.dragOver}  className="itemList" >
                
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