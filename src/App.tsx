import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@mantine/core/styles.css';
import './scss/main.scss';
import Demo from './demo/Demo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/demo' element={<Demo />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
