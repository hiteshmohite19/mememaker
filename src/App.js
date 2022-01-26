import logo from './logo.svg';
import './App.css';
import MemeBanner from './components/MemeBanner';
import Download from './components/Download';

function App() {
  return (
    <div className="App" style={{margin:'100px'}}>
      <MemeBanner />
      <Download />
    </div>
  );
}

export default App;
