import './App.css'
import NavBar from "./components/NavBar"
import CardCat from './components/CardCat';
import CarouselCat from './components/CarouselCat';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <CardCat />
      <CarouselCat />
    </div>
  );
}

export default App
