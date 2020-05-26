import React from 'react';
import BookTitle from "./BookTitle";


export default class ItemList extends React.Component {

    
    render() {
        return (
            <div className="itemList" >
                {this.props.books.map((book) => {
                    return (<BookTitle key={book.title} title={book.title}/>)

                })
                }
            </div>


        )
    }
}