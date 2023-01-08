import { useEffect } from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Headers from './compoments/Header/Header';
import {Route, Routes} from 'react-router-dom'
import ProductList from './compoments/ProductList/ProductList';
import Form from './compoments/Form/Form';


function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect ( ()=> {
    tg.ready()
  }, [tg])

  
  return (
    <div className="App">
    <Headers />
    <Routes>
      <Route index element={<ProductList />}/>
      <Route path={'form'} element={<Form />}/>
    </Routes>
    </div>
  );
}

export default App;
