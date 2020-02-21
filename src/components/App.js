import React from 'react';
import "../main.css";
import movies from "./Movies.js"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true, movieList: movies

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('It worked')
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

  }

  render() {
    return (
      <div className="Container">
        <header><h1>MovieList</h1></header>

        <form>
          <input type="text"></input>
          <button onClick={this.handleClick}>Search</button>
        </form>

        {this.state.movieList.map(eachMovie => (
          <div>{eachMovie.title}</div>
        ))}

      </div>
    )
  }
}

export default App;