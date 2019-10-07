import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Contact 
          name= "Charlotte Ramos"
          image="https://randomuser.me/api/portraits/women/10.jpg"
          online={false}
        />
        <Contact 
          name= "Kristen Walker"
          image="https://randomuser.me/api/portraits/women/88.jpg"
          online={true}
        />
        <Contact 
          name= "Pauline Mitchelle"
          image="https://randomuser.me/api/portraits/women/17.jpg"
          online={true}
        />

    </div>
  );
}

export default App;
