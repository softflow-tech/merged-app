import React from 'react'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'

import Chat from "./Chat"
import Login from './Login'
import Sidebar from "./Sidebar"
import Account from "./Account"
import Contacts from "./Contacts"
import { useStateValue } from "./StateProvider"
import DashboardComponent from './Dashboard/dashboard';

import '../css/App.css'

function App() {

  const slideRight = () => {
    document.getElementById('root').style.left = '-100%';
    document.getElementById('root').style.animation = 'slide-in 1s';
  };

  const slideLeft = () => {
    document.getElementById('root').style.left = '0';
    document.getElementById('root').style.animation = 'slide-in 1s';
  };

  const [{user}, dispatch ] = useStateValue();
  console.log(dispatch)

  return(
   <div className='app'>
    { !user ? (
      <>
      <Login />
      </>
      ):(
        <div className='app__body'>
          <div className="arrow" onClick={slideRight}>
            <div className="arrow-top"></div>
            <div className="arrow-bottom"></div>
          </div>
          <div className="arrow" id='leftarr' style={{transform:'rotateY(180deg)'}} onClick={slideLeft}>
            <div className="arrow-top"></div>
            <div className="arrow-bottom"></div>
          </div>
        <DashboardComponent />
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/account/:accountId'>
              <Account />
            </Route> 
            <Route path='/contacts'>
              <Contacts />
            </Route>            
            <Route path='/'>
              <Account />
            </Route>          
          </Switch>
        </Router>
      </div>

      )}
    </div>
  ) 
}

export default App;
