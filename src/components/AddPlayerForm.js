import React from 'react';
import PropTypes from 'prop-types';

const AddPlayerForm = ({ addPlayer }) => {
  const playerInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
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
  );
}

AddPlayerForm.propTypes = {
  addPlayer: PropTypes.func
}

export default AddPlayerForm;


/***** Using state instead of ref for the input *****/

// import React, { Component } from 'react';

// class AddPlayerForm extends Component {
//   state = {
//     value: ''
//   }

//   handleValueChange = (e) => {
//     this.setState({ value: e.target.value });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.addPlayer(this.state.value);
//     this.setState({ value: '' });
//   }

//   render() {
//     const { value } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Enter a players name" 
//           value={value} 
//           onChange={this.handleValueChange}
//         />

//         <input type="submit" value="Add Player" />
//       </form>
//     );
//   }
// }

// export default AddPlayerForm;