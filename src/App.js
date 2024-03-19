import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Topbar from './components/Topbar';
import User from './components/User'
import UserCreate from './components/UserCreate'
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
     <div className="App">
      <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <div className="container-fluid">
        <Switch>
         <Route  path="/" exact={true} component={ Dashboard } />
         <Route  path="/user" exact={true} component={ User } />
         <Route  path="/user-create" exact={true} component={ UserCreate } />
        </Switch>
        </div>
      </div>
      </div>
      </div>
     </div>
    </BrowserRouter>
    </UserProvider>
 );
} 

export default App;
