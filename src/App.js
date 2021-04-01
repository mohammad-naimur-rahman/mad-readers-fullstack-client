import { Container } from 'react-bootstrap';
import './App.css';
import HomeNavBar from './components/HomeNavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProduct from './components/AddProduct';
import ManageProduct from './components/ManageProduct';
import Books from './components/Books';
import { GlobalProvider } from './context/GlobalContext';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import NotFound from './components/NotFound';

function App() {


  return (
    <GlobalProvider>
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <HomeNavBar />
          <Switch>
            <Route exact path='/'>
              <Books />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/addProduct'>
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path='/orders'>
              <Orders />
            </PrivateRoute>
            <PrivateRoute path='/checkout'>
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path='/manageProduct'>
              <ManageProduct />
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </Router>
    </GlobalProvider>
  );
}

export default App;
