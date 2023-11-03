import React from 'react';
import { Button, useMantineTheme } from '@mantine/core'
import './App.css';

function App() {
  const theme = useMantineTheme()
  return (
    <div className="App">
      <Button color={theme.primaryColor}>TEST!</Button>
    </div>
  );
}

export default App;
