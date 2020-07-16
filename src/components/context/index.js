import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
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
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer
        }
      }}>
        {this.props.children}
      </ScoreboardContext.Provider>
    )
  }
}

export const { Consumer } = ScoreboardContext;
