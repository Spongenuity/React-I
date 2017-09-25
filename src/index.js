/*eslint no-unused-vars: "off"*/
import React from 'react';
import {render} from 'react-dom';
import ToDo from './ToDo';

require('!style-loader!css-loader!sass-loader!./index.scss');

const App = () => (
  <div>
    <ToDo />
  </div>
  );



render(<App />, document.getElementById('root'));
