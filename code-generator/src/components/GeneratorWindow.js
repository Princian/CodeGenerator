import React, { useState } from 'react';

import './styling/GeneratorWindow.css'

import LanguageSelect from './LanguageSelect.js';
import Options from './Options.js';
import Results from './Results.js';


function GeneratorWindow(props) {
  const [language, setLanguage] = useState("");
  const [options, setOptions] = useState({});

  const langs = [
    "React Function",
    "Java Class",
    "SQL Query",
    "C++",
  ];

  return(
    <div>
      <div className="SelectionWindow">
        <div className="LanguageSelectWindow">
          <LanguageSelect currentSelection={language }langs={langs} setLanguage={setLanguage}/>
        </div>
        <div className="OptionsWindow">
          <Options language={language} options={options} setOptions={setOptions}/>
        </div>
      </div>
      <div className="ResultsWindow">
        <Results language={language} options={options}/>
      </div>
    </div>
  );

};

export default GeneratorWindow;