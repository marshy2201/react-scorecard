import React, { useContext } from 'react';
import Player from './Player';
import { ScoreboardContext } from './context';

const PlayerList = () => {
  const { players } = useContext(ScoreboardContext);
  
  return (
    <>
      {players.map((player, index) => (
        <Player  
          key={player.id.toString()}
          index={index}
        />
      ))}
    </>
  );
}

export default PlayerList;