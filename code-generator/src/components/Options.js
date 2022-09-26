import React, { useState } from 'react';

function Options(props) {
    //Hooks

    const opStyle = {
        backgroundColor: 'grey',

        overflowY: 'auto',

        minHeight: '562px',
        maxHeight: '562px'
    }

    return (
        <div>
            <div>Selection: {props.language}</div>
            <div style={opStyle}>
                Hello
            </div>
        </div>
      );
}
    
export default Options;