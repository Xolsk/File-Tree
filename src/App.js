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
    console.log(this.state.books);

    

    
    
  }
  render(){
  return (
    <div className="App">
      <ItemList  booksInList={this.state.books} />
      <Tree  setData={this.setData} booksInTree={this.state.books}  />
    </div>
  );
}
}

