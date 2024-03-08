import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Keypad from './Components/Keypad';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (button) => {
    if (button === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (button === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + button);
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Keypad onButtonPress={handleButtonPress} />
    </div>
  );
}

export default App;
