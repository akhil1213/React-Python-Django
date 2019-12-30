import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//for react-bootstrap
import  {useForm} from 'react-hook-form';
import {useParams} from 'react-router';
//i kind of used this website https://serverless-stack.com/chapters/create-a-login-page.html

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errormessage:false,
      errormessagestring:'',
      username:'',
      firstname:'',
      lastname:'',
      password:'',
      college:''
    };
  }
  handleClick = (e) =>{
    if(!this.validateForm())e.preventDefault();
    /*if validatedform is false so its not validated then you prevent the 
    default action from happening which is going to user profile page.*/
  }
  validateForm = () =>{
    this.setState({errormessage:true});
      if(this.state.firstname.length === 0)
        this.setState({errormessagestring:"firstname is empty"});
      else if(this.state.lastname.length === 0)
        this.setState({errormessagestring:"last name is empty"});
      else if(this.state.username.length === 0)
          this.setState({errormessagestring:'username is empty'});
      else if(this.state.password.length === 0)
          this.setState({errormessagestring:"password is empty"});
      else
          this.setState({errormessagestring:"college must be chosen"});
    return this.state.username.length > 0 && this.state.firstname.length > 0 
      && this.state.lastname.length > 0 && this.state.password.length > 0 && 
      this.state.college.length > 0
  }
  updateUsername = (event) => {
    this.setState({username: event.target.value});
  }
  updateFName = (event) => {
    this.setState({firstname: event.target.value});
  }
  updateLName = (event) => {
    this.setState({lastname: event.target.value});
  }
  updatePassword = (event) => {
    this.setState({password: event.target.value});
  }
  updateCollege = (event) => {
    this.setState({college: event.target.value});
  }
    render(){
      return (
        <div id = "signup"className="App">
          <form>
          {this.state.errormessage && <p className = "error">Error:{this.state.errormessagestring}</p>}
            <label>First name:</label>
                <input
                name="firstname"
                type="text" 
                onChange={this.updateFName}
                />
            <label>Last name:</label>
            <input
              name="lastname"
              type="text"
              onChange={this.updateLName}
            />
            <label>Username:</label>
            <input
              name="username"
              type="text"
              onChange={this.updateUsername}
            />
            <label>Password:</label>
            <input
              name="password"
              type="text"
              onChange={this.updatePassword}
            />
            <label>College:</label>
            {/* <DropdownButton name ="college" id="dropdown-basic-button" title="College Options">
                <Dropdown.Item active>QC</Dropdown.Item>
                <Dropdown.Item >QCC</Dropdown.Item>
                <Dropdown.Item >Hunter</Dropdown.Item>
            </DropdownButton> */}
            <select name = "college" onChange={this.updateCollege}>
              <option value="Queens College">Queens</option>
              <option value="Hunter College">Hunter</option>
              <option value="Baruch">Baruch</option>
            </select>
            <br></br>
            <NavLink to={{
                  pathname: '/profile',
                  state:{
                      username:this.state.username,
                      firstname:this.state.firstname,
                      lastname:this.state.lastname,
                      password:this.state.password,
                      college:this.state.college
                  },
                }} onClick={this.handleClick} activeStyle={{ color: 'black' }} className="navLink">Submit and go to Profile with data</NavLink>
          </form>
        </div>
      );
    }
}

export default Signup;
