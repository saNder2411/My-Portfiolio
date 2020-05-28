import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app/app';
import {LanguageProvider} from './contexts/language-context/language-context';

ReactDOM.render(
  <LanguageProvider>
    <Router>
      <App />
    </Router>
  </LanguageProvider>,
  document.getElementById(`root`),
);
