import './App.css';
import NavBar from './components/NavBar/NavBar';
import itemListContaner from './components/NavBar/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <itemListContaner greeting={'bienvenidos'}/>
    </div>
  );
}

export default App;
