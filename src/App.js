import './App.css';
import Calci from './components/Calci';
import StudCrud from './components/StudCrud';
import Counter from './components/Counter';
import Counter5 from './components/Counter5';
import CurrencyConvertor from './components/CurrencyConvertor';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Counter5 />
      <hr />
      <CurrencyConvertor />
      <hr />
      <Cart />
      <hr />
      <Calci />
      <hr />
      <StudCrud />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
