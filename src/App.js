import Header from './components/Header';
import './App.css';
import Slider from './components/Slider';
import Products from './components/Products';

function App() {
  return (
    <div className='container'>
      <Header />
      <Slider />
      <Products />
    </div>
  );
}

export default App;
