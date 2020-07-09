import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
  render() {
    const {
      name,
      index,
      score,
      changeScore,
      id,
      removePlayer
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter 
          score={score} 
          changeScore={changeScore}
          index={index}
        />
      </div>
    );
  }
}

export default Player;