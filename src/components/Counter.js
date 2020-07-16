import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';

const Counter = ({ index, score }) => (
  <Consumer>
    {context => (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => context.actions.changeScore(index, -1)}> - </button>
          <span className="counter-score">{ score }</span>
          <button className="counter-action increment" onClick={() => context.actions.changeScore(index, 1)}> + </button>
        </div>
      )
    }
  </Consumer>
)

Counter.propTypes = {
  score: PropTypes.number,
  index: PropTypes.number
}

export default Counter;