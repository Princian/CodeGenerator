import React, { useState } from 'react';

import LanguageSelect from './Options.js';
import Options from './Options.js';
import Results from './Results.js';


function test(props) {
  const [language, setLanguage] = useState("");

  const langs = [
    "React Function",
    "Java Class",
    "C++",
    "SQL Query"
  ];

  return(
    <div>
      <div className="SelectionWindow">
        <div className="LanguageSelectWindow">
          <LanguageSelect />
        </div>
        <div className="OptionsWindow">
          <Options />
        </div>
      </div>
      <div>
        <Results />
      </div>
    </div>
  );

};

export test;