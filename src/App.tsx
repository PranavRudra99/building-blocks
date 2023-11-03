import React from 'react';
import { useMantineTheme, Button } from '@mantine/core'
import '@mantine/core/styles.css';
import './App.css';

function App() {
  const theme = useMantineTheme()
  return (
    <div className='full-height center'>
      <div>
        <Button>Test</Button>
      </div>
    </div>
  );
}

export default App;
