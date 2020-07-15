import React from 'react';
import Player from './Player';

const PlayerList = ({ players, removePlayer, changeScore, highestScore }) => {
  const findHighestScore = () => {
    const scores = players.map(player => player.score);
    const highestScore = Math.max(...scores);
    
    if (highestScore) {
      return highestScore;
    } else {
      return null;
    }
  }

  return (
    <React.Fragment>
      {players.map((player, index) => (
        <Player  
          name={player.name} 
          key={player.id.toString()}
          id={player.id}
          score={player.score}
          index={index}
          removePlayer={removePlayer}
          changeScore={changeScore}
          isHighScore={player.score === findHighestScore()}
        />
      ))}
    </React.Fragment>
  );
}

export default PlayerList;