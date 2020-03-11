import React from 'react';
import './App.css';
import Nav from './nav';
import Races from './races';
import menuPic from './pics/menu.png'
// import Stats from './stats';
// import Human from './races/human';
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
          
          <Route path="/:p" component={InfoPage}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

//  TODO:
/*  Make a private github repo for the project, so I can work on it on my laptop if needed!
    Finish new.js almost
    Write rpg.js
    Make the infoPage.js able to parse in-text Links and other style tags
    Put some pages into a sublist called Rules
    Put some pages into sublists for each Source, which are each a page that lists the Gifts at a given G level
    Have the routing accept Source/G/GiftName to show a page that's just about that Gift (each gift has its own .js, which are all pulled in the G page)
    Put some pages into a sublist called Lore
    Attach the github repo to a heroku app so its hosted on the cloud
    Go through the ideas part at the bottom of the google doc and add them into the main text
    Start adding pages of content so there's enough for a playtest campaign this summer?
*/

function Home() {
  return (
  // <div>
  //   <h1>Breach</h1>
  // </div>
  InfoPage({match:{params:{p:"home"}}})
  );
}

export default App;
