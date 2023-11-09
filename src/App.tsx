import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '@mantine/core/styles.css';
import './scss/main.scss';
import { paths } from './utilities/constants';
import GlobalContextProvider from './contexts/GlobalContext';
import Footer from './components/footer';
import HeaderContainer from './components/headerContainer';

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <div className='full-height'>
          <HeaderContainer />
          <Routes>
            {paths.map((path) => {
              return <Route key={path.label} path={path.endpoint} element={<path.component />}></Route>
            }
            )}
            <Route path='*' element={<Navigate to={'/login'} />}></Route>
          </Routes>
          <Footer />
        </div>
      </GlobalContextProvider>
    </BrowserRouter>
  )
}

export default App;
