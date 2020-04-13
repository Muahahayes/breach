import React from 'react';
import './App.css';
import Nav from './nav';
import Races from './races';
import Sources from './sources';
import Gifts from './gifts';
import Rules from './rules';
import Lore from './lore';
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
          <Route path="/world/:u/:p" component={Lore}/>
          <Route path="/world/:p" component={InfoPage}/>
          <Route path="/rules/:r" component={Rules}/>
          <Route path="/:p" component={InfoPage}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

//  TODO:
/*  
    Possibly add utility powers to the Source's as Source Proficiencies
    Go through the ideas part at the bottom of the google doc and add them into the main text
    Go back over the rules and iterate/refine them

    Make a rough draft of a character sheet
    Start adding pages of content so there's enough for a playtest campaign this summer?
    Go back over the rules and iterate/refine them    

    Make beastiary, put link to it in the smaller navbar (playtest ready at this point if *I* GM it)
    Go back over the rules and iterate/refine them

    Make GM guide, put link in the smaller navbar
    ***More TODO will show up here making the GM guide***
    Go back over the rules and iterate/refine them

    Make a login system, only allow users to see the book, put login and guidebook links in a smaller navbar above content-head
    Make a character sheet wizard, saves a sheet to a user
    Make roll calculator, pulls a character from the user
    (Now in ALPHA state, playtestable for other GMs)

    Work with Ryan on an intro campaign and Lore
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