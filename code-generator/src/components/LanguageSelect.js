import React, { useState } from 'react';
//import './styling/LanguageSelectStyle.css';

function LanguageSelect(props) {
    //Hooks

    //updates current selected language 
    function langClicked(box){
        var selection=box.target.innerHTML;
        if (selection === props.currentSelection){
            return;
        }
        console.log(selection);
        props.setLanguage(selection)
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

    const boxStyle={
        flex: '300px',
        borderStyle: 'solid',
        minHeight: `50px`,
        marginRight: '10px',
        marginLeft: '10px',
        marginTop: '10px',
        marginBottom: '10px',

        cursor: 'pointer',

        
    }

    return (
        <div style={containerStyle}>
            {props.langs.map((lang, i) => {
                return <div key={i} style={boxStyle} onClick={langClicked}>{lang}</div>
            })}
        </div>
      );
}
    
export default LanguageSelect;