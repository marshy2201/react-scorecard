import React from 'react';
import { Consumer } from './context';

const Stats = () => (
  <Consumer>
    {context => {
      const totalPlayers = context.players.length;
      const totalPoints = context.players.reduce((total, player) => total + player.score, 0);

      return (
        <table className="stats">
          <tbody>
            <tr>
              <td>Players:</td>
              <td>{ totalPlayers }</td>
            </tr>
            <tr>
              <td>Total Points:</td>
              <td>{ totalPoints }</td>
            </tr>
          </tbody>
        </table>
      )
    }}
  </Consumer>
)

export default Stats;