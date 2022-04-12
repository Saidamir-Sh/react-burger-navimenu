import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Menu from 'react-burger-navimenu';
import Menu from './components/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Menu position='right' className='width-30'>
            <Menu.Header>
              
            </Menu.Header>
            <Menu.Body>
                
            </Menu.Body>
        </Menu>
      </header>
    </div>
  );
}

export default App;
