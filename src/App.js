import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Topbar from './components/Topbar';
import User from './components/User'

function App() {
  return (
      <BrowserRouter>
     <div className="App">
      <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <div className="container-fluid">
        <Switch>
         <Route exact={true} path="/" component={ Dashboard } />
         <Route exact={true} path="/user" component={ User } />
        </Switch>
        </div>
      </div>
      </div>
      </div>
     </div>
    </BrowserRouter>
 );
}

export default App;
