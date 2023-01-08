import { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Headers from './compoments/Header/Header';

function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect ( ()=> {
    tg.ready()
  }, [tg])

  
  return (
    <div className="App">
    <Headers />
    <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
