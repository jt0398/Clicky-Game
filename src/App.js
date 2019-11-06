import React from "react";
import Nav from "./components/Nav";
import { CardColumns, Container } from "./components/Grid";
import CharacterCard from "./components/CharacterCard";
import characters from "./lotr.json";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin",
    sortedCharacters: []
  };

  handleCharClick = event => {
    console.log(event.target.name);
  };

  loadCharacters = () => {
    let ids = [];
    let characterList = [];

    for (let i = 0; i < 12; i++) {
      ids.push(i);
    }

    while (ids.length > 0) {
      const randomNum = Math.floor(Math.random() * ids.length);
      const id = ids.splice(randomNum, 1);
      characterList.push(characters[id]);
    }

    this.setState({ sortedCharacters: characterList });
  };

  componentDidMount() {
    this.loadCharacters();
  }

  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Container>
          <CardColumns>
            {this.state.sortedCharacters.map(character => {
              return (
                <CharacterCard
                  key={character.id}
                  {...character}
                  onClick={this.handleCharClick}
                />
              );
            })}
          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default App;
