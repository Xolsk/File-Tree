import React from 'react';
import ItemList from "./components/ItemList.js";
import Tree from "./components/Tree.js";
import './App.css';

export default class App extends React.Component {

  state = { books: [], root:[]};

  componentDidMount() {

    this.fetchData()
  }

  fetchData = () => {

    fetch('bookData.json')
      .then(res => res.json())
      .then(data => {
        
        this.setState({ books: data });
      })
      .catch(err => console.error(err));

  }

  dropRootBook = (event)=>{
    const selectedBookJSON = event.dataTransfer.getData("drag-item");
   const selectedBook= JSON.parse(selectedBookJSON);
    const rootItems= this.state.root;

    rootItems.push(selectedBook);

    const books=this.state.books;
    const indexToRemove = books.findIndex(book=>book.title===selectedBook.title);
    books.splice(indexToRemove,1);

    this.setState({root:rootItems, books:books});
    
  }

  dropBack=(event )=>{

    const selectedBookJSON = event.dataTransfer.getData("drag-item");
    const selectedBook= JSON.parse(selectedBookJSON);

    const rootItems= this.state.root;
    const indexToRemove = rootItems.findIndex(book=>book.title===selectedBook.title);
    rootItems.splice(indexToRemove,1);

    const books=this.state.books;
    books.push(selectedBook);


    this.setState({root:rootItems, books:books});
  }

  render(){
  return (
    <div className="App">
      <ItemList  books={this.state.books} dropBack={this.dropBack}/>
      <Tree rootBooks={this.state.root} dropRootBook={this.dropRootBook}/>
    </div>
  );
}
}

