import s from './App.module.css';
import BonusesContainer from './Components/Bonuses/BonusesContainer';

const App = (props) => {

  return (
    <div className={s.app}>
        <BonusesContainer/>
    </div>
  );
}

export default App;
