import React, { Component } from 'react';
import './App.css';
import axios from "axios"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results:[]
    }
  }
  componentDidMount = async () => {
    const response = await axios("https://sv443.net/jokeapi/v2/joke/programming");
    // debugger;
    console.log(response.data);
    this.setState({ results: response.data });
}


  render() {
    const { results } = this.state;
    return (
      <div> 
        <header><h1>JOKEY JOKE</h1></header>

        <h3>{results.joke}</h3>
        <h3>{results.setup}</h3>
        <h3>{results.delivery}</h3>
        
      
      </div>
    );
  }

}
export default App;
