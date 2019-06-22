import React from 'react';
import { Provider } from "react-redux";
import './App.scss';
import UbigeoForm from './Components/UbigeoForm';
import store from "./stores/store";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UbigeoForm></UbigeoForm>

    </div>
    </Provider>
  );
}

export default App;
