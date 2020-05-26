import React from 'react';
import ItemList from "./components/ItemList.js";
import Tree from "./components/Tree.js";
import './App.css';

export default class App extends React.Component {

  state = { books: []};

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

  dropBook = (event)=>{
    const book = event.dataTransfer.getData("drag-item");
    console.log(book)
  }

  

  render(){
  return (
    <div className="App">
      <ItemList  books={this.state.books}/>
      <Tree dropBook={this.dropBook}/>
    </div>
  );
}
}

