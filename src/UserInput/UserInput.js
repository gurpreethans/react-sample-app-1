import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

  const inputStyle = {
    border: '2px solid red'
  };


	return(
		<div className="user-name">
			<input 
        type="text" 
        style={inputStyle}
        onChange={props.change} 
        value={props.username} />
		</div>
	);
}

export default UserInput;