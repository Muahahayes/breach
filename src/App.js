import React from 'react';
import './App.css';
import Nav from './nav';
import Races from './races';
import Sources from './sources';
import Gifts from './gifts';
import Equipment from './equipment';
import Rules from './rules';
import Lore from './lore';
import Creatures from './creatures';
import menuPic from './pics/menu.png'
import InfoPage from './infoPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">     
      <Router>
        <Switch>
          <Route path="/:b" component={Nav}/>
          <Route path="/" component={Nav}/>
        </Switch>
        {/* <Nav /> */}
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
          <Route path="/equipment/:t/:e" component={Equipment}/>
          <Route path="/equipment/:t" component={Equipment}/>
          <Route path="/world/creatures/:t/:c" component={Creatures}/>
          <Route path="/world/creatures/:t" component={Creatures}/>
          <Route path="/world/lore/:p" component={Lore}/>
          <Route path="/world/:w" component={InfoPage}/>
          <Route path="/rules/:r" component={Rules}/>
          <Route path="/gm/:g" component={InfoPage}/>
          <Route path="/:p" component={InfoPage}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

//  TODO:
/*  
    Daily: Add 2 Gifts and 2 Lesser Gifts
    Daily: Add 2 Creatures
    Ryan is now writing content, up to him what he prioritizes while I get things working in the background
    
    Equipment
    finish Exploration.js
    Make a rough draft of a character sheet
    Start adding pages of content so there's enough for a playtest campaign this summer?    
    Go back over the rules and iterate/refine them (playtest ready at this point if *I* GM it)

    Refactor the site to have content pages load from a separate site I make as an API, so all the content doesn't load in one chunk at the start
    Make GM guide, put link in the smaller navbar
    ***More TODO will show up here making the GM guide***
    Go back over the rules and iterate/refine them

    Make a login system, only allow official users to see the World and GM books, put login and guidebook links in a smaller navbar above content-head
    Make a character sheet wizard, saves a sheet to a user
    Make roll calculator, pulls a character from the user
    Reading the player book is *free* but the user tools require an account login
    (Now in ALPHA state, playtestable for other GMs)

    Work with Ryan on an intro campaign
    While Ryan writes stuff, work on refactoring the site with a good CSS
    Go through playtesting feedback and iterate/refine rules and content, after this point no more system-wide or core-rule changes can be made
    When playtesting is happy with the state of the system and there's an intro campaign ready to go, make this all public (patreon?)
    (Now in BETA state, playable by non-testers)
*/

function Home() {
  return (
  InfoPage({match:{params:{p:"home"}}})
  );
}

export default App;