import { Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/pageNotFound';
import GDPR from './pages/gdpr';
import Home from './pages/home';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gdpr' element={<GDPR/>}/>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  );
}

export default App;
