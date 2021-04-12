import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
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
import Auth from '../hoc/auth';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = "/">
            <Homepage />
        </Route>
        <Route path="/login" component = {Auth(Login, false)} />
        <Route path="/create" component = {Auth(Createaccount, false)} />
        <Route exact path = "/dashboard" component = {Auth(Dashboard, true)} />
        <Route exact path = "/dashboard/accounts" component = {Auth(Accounts, true)} />
        <Route path = "/dashboard/rep" component = {Auth(Rep, true)} />
        <Route path = "/dashboard/products" component = {Auth(Products, true)} />
        <Route path = "/dashboard/customers" component = {Auth(Customers, true)} />
        <Route path = "/dashboard/analytics" component = {Auth(Analytics, true)} />
        <Route path = "/forget" component = {Auth(Forget, true)} />
        <Route path = "/edit" component = {Auth(Edit, true)}></Route>
      </div>
    </Router>
  );
}

export default App;
