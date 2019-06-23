import React from 'react';
import './App.scss';
import UbigeoForm from './Components/UbigeoForm';
import UbigeosViewContainer from "./ComponentContainers/UbigeosViewContainer";

function App() {
  return (
    <div className="App">
      <UbigeoForm></UbigeoForm>
      <UbigeosViewContainer></UbigeosViewContainer>

    </div>
  );
}

export default App;
