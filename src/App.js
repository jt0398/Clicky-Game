import React from "react";
import Nav from "./components/Nav";
import characters from "./lotr.json";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin"
  };

  componentDidMount() {
    console.log(characters);
  }

  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
      </div>
    );
  }
}

export default App;
