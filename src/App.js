import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Landing from './components/Landing.jsx';
import Menu from './components/Menu.jsx';
import Error from './components/Error.jsx';
import Status from './components/Status.jsx';

function App() {
  const LandingLoaded = useSelector((state) => { return state.LandingLoaded });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        LandingLoaded === 0
        ? <Landing />
        : <Menu cartDisplay={ false } />
        } exact />
        <Route path="/menu" element={ <Menu cartDisplay={ false } /> } />
        <Route path="/cart" element={ <Menu cartDisplay={ true } /> } />
        <Route path="/status" element={ <Status /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );

}

export default App;