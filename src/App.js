import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroText from './components/HeroText/HeroText';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroText></HeroText>
    </div>
  );
}

export default App;
