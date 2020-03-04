import React from 'react';
import './UserOutput.css';
const person = (props) => {
    return (
        <div className="UserOutput">
            <p><strong>User:</strong> {props.userName}</p>
            <p><strong>Profile:</strong> Software Developer</p>
        </div>
    )
}
export default person;