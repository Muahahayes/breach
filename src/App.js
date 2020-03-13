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
/*  Fix Links!
    Make <table> css
    Finish new.js almost
    Write rpg.js
    Put some pages into a sublist called Rules
    Put some pages into sublists for each Source, which are each a page that lists the Gifts at a given G level
    Have the routing accept Source/G/GiftName to show a page that's just about that Gift (each gift has its own .js, which are all pulled in the G page)
    Put some pages into a sublist called Lore
    Go through the ideas part at the bottom of the google doc and add them into the main text
    Start adding pages of content so there's enough for a playtest campaign this summer?
*/

function Home() {
  return (
  InfoPage({match:{params:{p:"home"}}})
  );
}

export default App;
