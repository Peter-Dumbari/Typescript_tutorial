import React from 'react';
import './App.css';
import Class from './Components/Class/Class';
import Form from './Components/Form/Form';
import Greetings from './Components/Greetings/Greetings';
import Auth from './Components/userAuth/Auth';
import List from './Components/userList/List';


function App() {
  return (
    <div className="App">
      <h1>hello from typescript</h1>
      <Class name='peter' age={8} village='lorre'/>
      <Greetings/>
      <Form/>
      <Auth/>
      <List/>
    </div>
  );
}

export default App;
