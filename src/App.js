import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(prevState => !prevState);
  };

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <header className="App-header">
        <h1>Background Toggle</h1>
        <button onClick={handleToggle}>Toggle Background</button>
      </header>
    </div>
  );
}

export default App;
