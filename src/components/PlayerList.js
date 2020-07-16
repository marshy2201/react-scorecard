import React from 'react';
import Player from './Player';
import { Consumer } from './context';

const PlayerList = () => {
  return (
    <Consumer>
      {context => {
        const findHighestScore = () => {
          const scores = context.players.map(player => player.score);
          const highestScore = Math.max(...scores);
          
          if (highestScore) {
            return highestScore;
          } else {
            return null;
          }
        }

        return (
          <React.Fragment>
            {context.players.map((player, index) => (
              <Player  
                {...player}
                key={player.id.toString()}
                index={index}
                isHighScore={player.score === findHighestScore()}
              />
            ))}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default PlayerList;