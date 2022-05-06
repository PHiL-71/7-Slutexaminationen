import './App.css';
import Landing from './components/Landing.jsx';
import Menu from './components/Menu.jsx';
import { useSelector } from 'react-redux';

function App() {
  const landing_loaded = useSelector((state) => { return state.landing_loaded });

  return (
    <div className="App">
      { landing_loaded === 0
        ? <Landing />
        : <Menu />
      }
    </div>
  );

}

export default App;