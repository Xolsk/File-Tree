import React from 'react';
import BookTitle from "./BookTitle";


export default class ItemList extends React.Component {

    dragOver = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div onDragOver={this.dragOver} onDrop={this.props.dropBack} className="itemList" >
                {this.props.books.map((book) => {
                    return (<BookTitle key={book.title} book={book}/>)

                })
                }
            </div>


        )
    }
}