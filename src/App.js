import './App.css';
import Cards from './components/Cards';
import Comps from './components/Comps';
import Unmount from './components/Unmount';

function App() {
  return (
    <div className="App">
      <Cards />
      <Comps />
      <Unmount />
    </div>
  );
}

export default App;
