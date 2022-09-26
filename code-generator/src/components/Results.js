import React, { useState, useEffect } from 'react';

function Results(props) {
    //Hooks
    const [code, setCode] = useState("Select a Language!");

    useEffect(() => {
        switch(props.language){
            case('React'):
                reactCode();
                break;
            case('Java Class'):
                javaCode();
                break;
            case('SQL Query'):
                sqlCode();
                break;
            case('C++'):
                cppCode();
                break;
            default:
                break;
        }
    })

    function reactCode(){
        setCode("Coding in React");
    }

    function javaCode(){
        setCode("Coding in Java");
    }

    function sqlCode(){
        setCode("Coding in SQL");
    }

    function cppCode(){
        setCode("Coding in C++");
    }

    return (
        <div>
            {code}
        </div>
      );
}
    
export default Results;