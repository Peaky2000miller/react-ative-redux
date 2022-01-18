import React from 'react';
import { Provider } from "react-redux";

import Counter from './src/Counter';
import { store } from './src/store/store';


const App = (props) => {
  return(
    <Provider store={store}>
      <Counter/>
    </Provider>
  );  
};

export default App;
