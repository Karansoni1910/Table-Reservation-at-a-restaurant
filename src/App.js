// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Reserve from "./components/Reserve";
import {Route} from 'react-router-dom';
import {About} from "./components/About"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Reserve}/>
      <Route path="/about" component={About}/>

    </div>
  );
}

export default App;
