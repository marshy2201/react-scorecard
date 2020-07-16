import React from 'react';
import Player from './Player';
import { Consumer } from './context';

const PlayerList = () => {
  return (
    <Consumer>
      {({ players }) => (
        <React.Fragment>
          {players.map((player, index) => (
            <Player  
              key={player.id.toString()}
              index={index}
            />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;