
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch, Link,Route,} from 'react-router-dom'
 import {Navbar,Nav} from "react-bootstrap";
 import Login from './component/Login';
 import Home from './component/Home';
 import "./component/Style.css";
import Newform from './component/Newform';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
  <Router>
  <Navbar bg="dark" variant="dark">
      
          <Navbar.Brand href=""></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href=""> <Link  to='/'>Home</Link></Nav.Link>
            <Nav.Link href=""> <Link  to="/login">Login</Link></Nav.Link>
            <Nav.Link href=""> <Link  to="/form">Resistration Form</Link></Nav.Link>
          
          </Nav>
         
      </Navbar>

      
   
      <Switch>
        
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/form">
            <Newform/>
          </Route>
        
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
  </Router>
    </div>
  );
}

export default App;
