import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from '../components/Header';
import Homepage from '../components/Homepage';
import Createaccount from '../components/Createaccount';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Forget from '../components/Forget';
import Edit from '../components/Edit';
import Accounts from "../Subpages/Accounts";
import Rep from "../Subpages/Rep";
import Products from "../Subpages/Products";
import Customers from "../Subpages/Customers";
import Analytics from "../Subpages/Analytics";
import Account_add from "../Subpages/Account_add";
import Auth from '../hoc/auth';

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
        <Route exact path = "/dashboard">
          <Dashboard />
        </Route>
        <Route exact path = "/dashboard/accounts">
          <Accounts />
        </Route>
        <Route path = "/dashboard/accounts/add">
          <Account_add />
        </Route>
        <Route path = "/dashboard/rep">
          <Rep />
        </Route>
        <Route path = "/dashboard/products">
          <Products />
        </Route>
        <Route path = "/dashboard/customers">
          <Customers />
        </Route>
        <Route path = "/dashboard/analytics">
          <Analytics />
        </Route>
        <Route path = "/forget">
          <Forget />
        </Route>
        <Route path = "/edit" component = {Auth(Edit, true)}>
          
        </Route>
      </div>
    </Router>
  );
}

export default App;
