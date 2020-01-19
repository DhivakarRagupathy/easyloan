import React from 'react';
import dashboard from '../Forms/Dashboard'
 export default  class LoginForm extends React.Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
        //alert("hi")
    //   e.preventDefault()
    //   let username = this.refs.username.value
    //   let password = this.refs.password.value
      
      this.returnDashboard();
    }

    returnDashboard=()=>{
        return(<dashboard/>, document.getElementById("dashboard"))
    }
    
    render() {
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      )
    }
  
  }
  
  

  