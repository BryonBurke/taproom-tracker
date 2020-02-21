import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewKegForm from './NewKegForm'


class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
      this.handleAuthorizedConfirmation = this.handleAuthorizedConfirmation.bind(this);
  }

  handleAuthorizedConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onAuthorizedConfirmation={this.handleAuthorizedConfirmation}/>;
    }
    return (
      <ConfirmationQuestions />
    );
  }
}

export default NewKegControl;
