import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Createaccount from '../components/Createaccount';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Forget from '../components/Forget';
import Edit from '../components/Edit';

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
        <Route path = "/dashboard">
          <Dashboard />
        </Route>
        <Route path = "/forget">
          <Forget />
        </Route>
        <Route path = "/edit">
          <Edit />
        </Route>
      </div>
    </Router>
  );
}

export default App;
