import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '@mantine/core/styles.css';
import './scss/main.scss';
import Demo from './components/demo/Demo';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/demo' element={<Demo />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Navigate to={'/login'}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
