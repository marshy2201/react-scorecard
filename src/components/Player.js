import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
    isHighScore: PropTypes.bool
  }

  render() {
    const {
      name,
      index,
      score,
      changeScore,
      id,
      removePlayer,
      isHighScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={isHighScore} />
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