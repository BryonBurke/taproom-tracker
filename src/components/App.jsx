import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import NewKeg from './NewKeg';
import NewKegControl from './NewKegControl';
import Employee from './Employee';
import Patron from './Patron';
import EditKeg from './EditKeg';
import Error404 from './Error404';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){

  }

  handleAddingNewKegToList(newTicket){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
                <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route path='/employee' component={Employee} />
        <Route path='/patron' component={Patron} />
        <Route path='/editkeg' component={EditKeg} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
