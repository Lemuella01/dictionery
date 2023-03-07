
import './App.css';
import { GlobalUseContext } from './components/context/Context';
import Nav from './components/nav/Nav';

function App() {
  const {theme, fontFamily} = GlobalUseContext()
  return (

    <div className="App min-h-screen" id={theme}>
      <div className={fontFamily()}> 

      <Nav />
      
    </div>
      </div>
  );
}

export default App;
