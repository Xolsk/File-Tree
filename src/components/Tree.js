import React from 'react';
import BookTree from "./BookTree"

export default class Tree extends React.Component {

    state = {};

    dragOver = (event) => {
        event.preventDefault();
    }

    render() {

        return (
            <div className="tree" >
                <div onDragOver={this.dragOver} onDrop={this.props.dropRootBook}>ROOT</div>
                {this.props.rootBooks.map((book) => {
                    return (<BookTree removeFromList={this.props.removeFromList} key={book.title} book={book} />)

                })
                }
            </div>


        )
    }
}