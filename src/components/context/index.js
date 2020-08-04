import React, { useState } from 'react';

export const ScoreboardContext = React.createContext();
let id = 0;

export const Provider = (props) => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 0
    },
    {
      name: "Treasure",
      score: 0,
      id: 1
    },
    {
      name: "Ashley",
      score: 0,
      id: 2
    }
  ]);

  const handleScoreChange = (index, delta) => {
    setPlayers(prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      return updatedPlayers;
    });
  }

  const handleAddPlayer = (name) => {
    setPlayers(prevState => {
      return [
        ...prevState,
        {
          name,
          score: 0,
          id: id += 1
        }
      ]
    });
  }

  const handleRemovePlayer = (id) => {
    setPlayers(prevState => prevState.filter(player => player.id !== id));
  }

  return (
    <ScoreboardContext.Provider value={{
      players,
      actions: {
        changeScore: handleScoreChange,
        removePlayer: handleRemovePlayer,
        addPlayer: handleAddPlayer
      }
    }}>
      { props.children }
    </ScoreboardContext.Provider>
  )
}
