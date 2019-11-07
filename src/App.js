import React from "react";
import Nav from "./components/Nav";
import { CardColumns, Container } from "./components/Grid";
import CharacterCard from "./components/CharacterCard";
import characters from "./lotr.json";

class App extends React.Component {
  state = {
    score: 0, //User's count of correct guesses
    topScore: 0, //User's highest score
    message: "", //Displays messages incorrect or correct depending on user's action
    sortedCharacters: [] //An array of character objects. The order is random.
  };

  handleCharClick = id => {
    //Checks if the character has been selected before
    if (characters[id - 1].clicked) {
      /*If the character has been selected before
      and the current score is highest score,
      update the highest score value
      */
      let topScore = this.state.topScore;

      if (this.state.score > topScore) {
        topScore = this.state.score;
      }

      //Resets score and displays "You guess incorrectly"
      this.setState({ message: "incorrectly", score: 0, topScore: topScore });
    } else {
      /* If character has not been selected before,
        update character's object clicked property value to true.
        Then increase the score incrementally and displays messaage "You guessed correctly"
      */
      characters[id - 1].clicked = true;
      this.setState((prevState, props) => {
        return { score: prevState.score + 1, message: "correctly" };
      });
    }

    //Render the character images
    this.loadCharacters();
  };

  loadCharacters = () => {
    let ids = [];
    let characterList = [];

    //Numbers 0 to 11 is added to the array
    for (let i = 0; i < 12; i++) {
      //If the user guess incorrectly, resets all the character clicked property to false
      if (this.state.score === 0) {
        characters[i].clicked = false;
      }
      ids.push(i);
    }

    /* While there's an id in the array, 
    generate a random number 11 times. The random number
    is equivalent to the index or position of character
    in the original character array. The character is then
    added to the sorted array */
    while (ids.length > 0) {
      const randomNum = Math.floor(Math.random() * ids.length);
      const id = ids.splice(randomNum, 1);
      characterList.push(characters[id]);
    }

    //Render the character images. The order of the images is random
    this.setState({ sortedCharacters: characterList });
  };

  componentDidMount() {
    this.loadCharacters();
  }

  render() {
    return (
      <div>
        {/*NAV*/}
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Container>
          {/*Character Images*/}
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
