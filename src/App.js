import './App.css';
// import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/home' component={Home}/>
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
