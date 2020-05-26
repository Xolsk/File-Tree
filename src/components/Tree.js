import React from 'react';
import BookTree from "./BookTitle"

export default class Tree extends React.Component {

    state = {};

    dragOver = (event) => {
        event.preventDefault();
    }

    render() {

        return (
            <div className="tree" onDragOver={this.dragOver} onDrop={this.props.dropRootBook}>
                <div>ROOT</div>
                {this.props.rootBooks.map((book) => {
                    return (<BookTree key={book.title} book={book} />)

                })
                }
            </div>


        )
    }
}