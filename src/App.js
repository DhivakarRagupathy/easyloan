import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './Forms/LoginForm';

export default class App extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  
  
  signIn(username, password) {
    
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    
    this.setState({user: null})
  }
  
  render() {
   
    return (
      <div>
        <h1></h1>
        
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
    
  }
  
}

ReactDOM.render(<App/>, document.getElementById("app"))