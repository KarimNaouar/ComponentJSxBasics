import React from 'react';
import Fullname from "./profile/FullName";
import ProfilPhoto from "./profile/ProfilPhoto";
import Address from "./profile/Address";
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="title red">
      <Fullname /> <br/>
      <Address /> <br/>
      <ProfilPhoto />
      </div>
      </header>
    </div>
  );
}

export default App;
