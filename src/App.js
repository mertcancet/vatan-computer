import Header from './components/Header';
import 'swiper/swiper-bundle.min.css';
import './App.css';
import Slider from './components/Slider';
import Products from './components/Products';
import BestSeller from './components/BestSeller';
function App() {
  return (
    <div className='container'>
      <Header />
      <Slider />
      <Products />
      <BestSeller />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
}

export default App;
