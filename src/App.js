import React from "react";
import Nav from "./components/Nav";
import { CardColumns, Container } from "./components/Grid";
import CharacterCard from "./components/CharacterCard";
import characters from "./lotr.json";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    message: "",
    sortedCharacters: []
  };

  handleCharClick = id => {
    if (characters[id - 1].clicked) {
      let topScore = this.state.topScore;

      if (this.state.score > topScore) {
        topScore = this.state.score;
      }

      this.setState({ message: "incorrectly", score: 0, topScore: topScore });
    } else {
      characters[id - 1].clicked = true;
      this.setState((prevState, props) => {
        return { score: prevState.score + 1, message: "correctly" };
      });
    }

    this.loadCharacters();
  };

  loadCharacters = () => {
    let ids = [];
    let characterList = [];

    for (let i = 0; i < 12; i++) {
      if (this.state.score === 0) {
        characters[i].clicked = false;
      }
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
                  id={character.id}
                  image={character.image}
                  onClick={() => this.handleCharClick(character.id)}
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
