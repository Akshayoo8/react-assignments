import React from 'react';
import './UserInput.css';
const person = (props) => {
    return (
        <div className="UserInput">
            <input type="text" placeholder="User Name" onChange={props.changed} value={props.userName} />
        </div>
    )
}
export default person;