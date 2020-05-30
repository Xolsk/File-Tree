import React from 'react';
import ItemList from "./components/ItemList.js";
import Tree from "./components/Tree.js";
import './App.css';

export default class App extends React.Component {

  state = { books:[]};

  componentDidMount() {

    this.fetchData()
  }

  fetchData = () => {

    fetch('bookData.json')
      .then(res => res.json())
      .then(data => {
        let books = data;
        this.setState({ books: books});
      })
      .catch(err => console.error(err));

  }

  setData = (parent,child)=>{

    const books=this.state.books;

    if (parent!=="ROOT"){
      const locatedParent= books.find(book=>book.title===parent.title);
      locatedParent.children.push(child);
     
    }
    const locatedChild= books.find(book=>book.title===child.title);
    locatedChild.parent=parent;
    locatedChild.inList="false";

    this.setState({books:books});
 
  }

  setBack=(dragged)=>{

    const books = this.state.books;
    const locatedBook = books.find(book=>book.title===dragged.title);
    locatedBook.inList="true";

    locatedBook.children.forEach(child => {
        let locatedChild= books.find(book=>book.title===child.title);
        locatedChild.inList="true";
        locatedChild.parent=undefined;
    });

    locatedBook.children=[];
    locatedBook.parent=undefined;

  //  const locatedParent = books.find(book=>book.title===dragged.parent.title);
  //  locatedParent.children=[];
    
    this.setState({books:books});
    
  }

  render(){
  return (
    <div className="App">
      <ItemList  setBack={this.setBack} booksInList={this.state.books} />
      <Tree  setData={this.setData} booksInTree={this.state.books}  />
    </div>
  );
}
}

