import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '@mantine/core/styles.css';
import './scss/main.scss';
import { paths } from './utilities/constants';
import Navigation from './components/navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {paths.map((path) => {
          return <Route key={path.label} path={path.path} element={<path.component />}></Route>
        }
        )}
        <Route path='*' element={<Navigate to={'/login'} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
