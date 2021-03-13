import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Createaccount from '../src/components/Createaccount';
import Login from './components/Login';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = "/">
        <Header />
          <Homepage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
        <Header />
          <Createaccount />
        </Route>
      </div>
    </Router>
  );
}

export default App;
