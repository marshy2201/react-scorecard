import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  }

  // prev player id
  prevPlayerId = 4;

  highestScore() {
    const scores = this.state.players.map(player => player.score);
    const highestScore = Math.max(...scores);
    
    if (highestScore) {
      return highestScore;
    } else {
      return null;
    }
  }

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState.players];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      }
    });
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => ({
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    }));
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }

  render() {
    const { players } = this.state;

    return (
      <div className="scoreboard">
        <Header players={players} />
  
        {/* Players */}
        {players.map((player, index) => (
          <Player  
            name={player.name} 
            key={player.id.toString()}
            id={player.id}
            score={player.score}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            isHighScore={player.score === this.highestScore()}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;