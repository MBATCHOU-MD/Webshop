import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import $ from 'jquery';
import User from './model/user';

interface AppState{
  users: User[],
  currentPage: string,
}

class App extends React.Component{  
  
  state: AppState;
  
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
      currentPage: `enter`,
    };

     this.enterActionButton = this.enterActionButton.bind(this);
  }

  enterActionButton(){
    const email = $('#emailInput').val() as string;
    const user = this.getFromUsers(email);
    console.log(`button pressed ${email} ${user}`);
    if (user) {
      this.setState({
        currentPage: `login`
      });
    }  
    else {
      this.setState({
        currentPage: `register`
      }); 
    }
  } 
   
  getFromUsers(email: string){
    for (const user of this.state.users){
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  render() {
    let page = <div>unknown</div>

    if (this.state.currentPage === `enter`){
      page = 
      <div className="App">
        <div>Wasp Warehouse</div>
        <div>Enter</div>
        <div>
          <input id="emailInput"/>
        </div>
        <div>
          <button onClick={this.enterActionButton}>OK</button>
        </div>
      </div> 
    }
    else if (this.state.currentPage === `register`){
      page = 
      <div className="App">
        <div>Wasp warehouse</div>
        <div>Register</div>
        <div>
          <input id="emailInput" placeholder="email?"/>
        </div>
        <div>
          <input placeholder="name?"/>
        </div>
        <div>
          <input type="password" placeholder="password?"/>
        </div>
        <div>
          <button >OK</button>
        </div>
      </div>
    }

    return (page);
  }
}

export default App;