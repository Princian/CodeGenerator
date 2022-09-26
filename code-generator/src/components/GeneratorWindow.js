import React, { useEffect, useState } from 'react';

import './styling/GeneratorWindow.css'

import LanguageSelect from './LanguageSelect.js';
import Options from './Options.js';
import Results from './Results.js';


function GeneratorWindow(props) {
  const [language, setLanguage] = useState("");
  const [activeLang, setActiveLang] = useState();
  const [reactOptions, setReactOptions] = useState({});
  const [sqlOptions, setSqlOptions] = useState({});
  const [javaOptions, setJavaOptions] = useState({});
  const [cppOptions, setCppOptions] = useState({});


  const langs = [
    "React Function",
    "Java Class",
    "SQL Query",
    "C++",
  ];

  useEffect(() => {
    switch(language){
      case ('React'):
        setActiveLang(reactOptions);
        break;
      case('Java Class'):
        setActiveLang(javaOptions);
        break;
      case('SQL Query'):
        setActiveLang(sqlOptions);
        break;
      case('C++'):
        setActiveLang(cppOptions);
        break;
      default:
        break;
    }
  })

  return(
    <div>
      <div className="SelectionWindow">
        <div className="LanguageSelectWindow">
          <LanguageSelect currentSelection={language }langs={langs} setLanguage={setLanguage}/>
      </div>
      <div className="OptionsWindow">
          <Options language={language} />
        </div>
      </div>
      <div className="ResultsWindow">
        <Results language={language} optionsSelected={activeLang}/>
      </div>
    </div>
  );

};

export default GeneratorWindow;