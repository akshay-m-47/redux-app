import './App.css';
import HeaderContainer from './container/HeaderContainer';
import HomeContainer from './container/HomeContainer'
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <h1>Redux-App</h1>
      <HomeContainer/>
    </div>
  );
}

export default App;
