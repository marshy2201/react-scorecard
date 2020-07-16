import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
import { Consumer } from './context';

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }

  render() {
    const {
      name,
      index,
      score,
      id,
      isHighScore
    } = this.props;

    return ( 
      <div className="player">
        <Consumer>
          {({ actions }) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
              <Icon isHighScore={isHighScore} />
              { name }
            </span>
          )}
        </Consumer>
        
        <Counter 
          score={score}
          index={index}
        />
      </div>
    );
  }
}

export default Player;