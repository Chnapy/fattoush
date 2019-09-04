import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fattoush } from '../.';
import {JSONSchema7} from "json-schema";

const schema: JSONSchema7 = {
    type: 'object'
};

const fattoush = new Fattoush(schema);

const App = () => {
  return (
    <div>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
