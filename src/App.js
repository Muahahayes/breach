import React from 'react';
import './App.css';
import Nav from './nav';
import Races from './races';
import Sources from './sources';
import Gifts from './gifts';
import menuPic from './pics/menu.png'
import InfoPage from './infoPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">     
      <Router>
        <Nav />
        <div className="fade"/>
        <div className="nav-padding">
          <img src={menuPic} alt="" height="50" width="50" className="hamburger"/>
          {/* <div class="hamburger">
            <div></div>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div></div>
        </div> */}
        </div>
        <Switch>
          <Route path="/pages/:p" component={InfoPage}/>
          <Route path="/races/:r" component={Races}/>
          <Route path="/sources/:s/gifts" component={Gifts}/>
          <Route path="/sources/:s" component={Sources}/>          
          <Route path="/gifts/:s/:g" component={Gifts}/>
          <Route path="/:p" component={InfoPage}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

//  TODO:
/*  Finish new.js almost
    Write rpg.js
    Put some pages into a sublist called Lore
    Go through the ideas part at the bottom of the google doc and add them into the main text
    Go back over the rules and iterate/refine them
    Make a rough draft of a character sheet
    Start adding pages of content so there's enough for a playtest campaign this summer?
    Go back over the rules and iterate/refine them
    Make a login system, only allow users to see the book, put login and guidebook links in a smaller navbar above content-head
    Make a character sheet wizard, saves a sheet to a user
    Make roll calculator, pulls a character from the user
    Make beastiary, put link to it in the smaller navbar (playtest ready at this point)
    Go back over the rules and iterate/refine them
    Make GM guide, put link in the smaller navbar
    Go back over the rules and iterate/refine them
    Work with Ryan on an intro campaign and Lore
*/

function Home() {
  return (
  InfoPage({match:{params:{p:"home"}}})
  );
}

export default App;
