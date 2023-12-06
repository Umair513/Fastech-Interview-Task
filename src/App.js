import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroText from './components/HeroText/HeroText';
import Pic from './components/Pic/Pic';
import Statistics from './components/Statistics/Statistics';
import ThreeCards from './components/ThreeCards/ThreeCards';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroText></HeroText>
      <Pic></Pic>
      <Statistics></Statistics>
      <ThreeCards></ThreeCards>
    </div>
  );
}

export default App;
