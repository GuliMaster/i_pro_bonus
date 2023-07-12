import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import BonusesContainer from './Components/Bonuses/BonusesContainer';
import FakeElement from './Components/FakeElement/FakeElement';

const App = () => {
  return (
    <div className={s.app}>
      <Routes>
        <Route path='/' element={<BonusesContainer/>}/>
        <Route path='/info' element={<FakeElement/>}/>
        <Route path='/home' element={<FakeElement/>}/>
        <Route path='/fullbonuses' element={<FakeElement/>}/>
      </Routes>
    </div>
  );
}

export default App;
