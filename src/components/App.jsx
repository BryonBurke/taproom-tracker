import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import NewKeg from './NewKeg';
import Employee from './Employee';
import Patron from './Patron';


function App(){
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={KegList} />
    <Route path='/newKeg' component={NewKeg} />
    <Route path='/employee' component={Employee} />
    <Route path='/patron' component={Patron} />
    </Switch>
    </div>
  );
}

export default App;
