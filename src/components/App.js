import React from 'react'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'

import { useStateValue } from "./StateProvider"

import Account from "./Account"
import Chat from "./Chat"
import Contacts from "./Contacts"
import Login from './Login'
import DashboardComponent from './Dashboard/dashboard';

import Sidebar from "./Sidebar"
// import PrivateChat from './PrivateChat'

import '../css/App.css'

function App() {

  const slideR = () => {
    var boxOne = document.getElementById('root')
        boxOne.classList.add('horizTranslate');
        var computedStyle = window.getComputedStyle(boxOne),
        Left = computedStyle.getPropertyValue('left');
        boxOne.style.left = Left;
        boxOne.classList.remove('horizTranslate');    
    
  };

  const slideRight = () => {
    document.getElementById('root').style.left = '-100%';
  };

  const slideLeft = () => {
    document.getElementById('root').style.left = '0';
  };

  const [{user}, dispatch ] = useStateValue();

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
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat />
            </Route>
            <Route path='/dm/:dmId'>
              {/* <PrivateChat /> */}
            </Route>
            <Route path='/account/:accountId'>
              <Account />
            </Route> 
            <Route path='/contacts'>
              <Contacts />
            </Route>            
            <Route path='/'>
              {/* <Chat /> */}
              <Account />
            </Route>          
          </Switch>
          <Sidebar />
        </Router>
      </div>

      )}
    </div>
  ) 
}

export default App;
