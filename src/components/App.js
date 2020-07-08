import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scorecard" totalPlayers={ this.state.players.length } />
  
        {/* Players */}
        {this.state.players.map(player => (
          <Player  
            name={ player.name } 
            key={ player.id.toString() }
            removePlayer={ this.handleRemovePlayer }
            id={ player.id }
          />
        ))}
      </div>
    );
  }
}

export default App;