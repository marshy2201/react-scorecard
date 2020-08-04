import React, { useContext } from 'react';
import { ScoreboardContext } from './context';

const AddPlayerForm = () => {
  const { actions } = useContext(ScoreboardContext);
  
  const playerInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addPlayer(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter a players name" 
        ref={playerInput}
      />

      <input type="submit" value="Add Player" />
    </form>
  )
}

export default AddPlayerForm;
