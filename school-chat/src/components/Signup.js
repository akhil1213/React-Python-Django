import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//for react-bootstrap
import  {useForm} from 'react-hook-form';
import {useParams} from 'react-router';
import {EmailValidator} from 'email-validator';
//i kind of used this website https://serverless-stack.com/chapters/create-a-login-page.html

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errormessage:false,
      fullNameError:'',
      usernameError:'',
      emailError:'',
      collegeError:'',
      passwordError:'',
      username:'',
      fullname:'',
      email:'',
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
    const regexp = '/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/';
    this.setState({errormessage:true});
      if(this.state.fullname.length === 0)
        this.setState({fullNameError:"fullname is blank"});
      else if(this.state.email.length === 0){
        this.setState({fullNameError:"",emailError:"email is empty"});
      }
      // else if(!regexp.test(this.state.email).val())
      //   this.setState({errormessagestring:"email is in an invalid form"});
      else if(this.state.username.length === 0){
          this.setState({fullNameError:""});
          this.setState({emailError:""})
          this.setState({fullNameError:"",emailError:"",usernameError:"username empty af"});
      }
      else if(this.state.password.length === 0){
        this.setState({fullNameError:"",emailError:"",usernameError:"",passwordError:"password empty"});
      }
      else{
          this.setState({fullNameError:"",emailError:"",usernameError:"",passwordError:"",collegeError:"college must be chosen"});
      }
    return this.state.username.length > 0 && this.state.fullname.length > 0 
      && this.state.email.length > 0 && this.state.password.length > 0 && 
      this.state.college.length > 0;
  }
  updateUsername = (event) => {
    this.setState({username: event.target.value});
  }
  updateFName = (event) => {
    this.setState({fullname: event.target.value});
  }
  updateEmail = (event) => {
    this.setState({email: event.target.value});
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
          <form id="formforsignup">
            <label>Full name:</label>
                <input
                name="fullname"
                type="text" 
                onChange={this.updateFName}
                />
                {this.state.fullNameError.length > 0 && <div id ="errorlabel">{this.state.fullNameError}</div>}
            <label>Email:</label>
            <input
              name="email"
              type="email"
              onChange={this.updateEmail}
            />
            {this.state.emailError.length > 0 && <div id ="errorlabel">{this.state.emailError}</div>}
            <label>Username:</label>
            <input
              name="username"
              type="text"
              onChange={this.updateUsername}
            />
            {this.state.usernameError.length > 0 && <div id ="errorlabel">{this.state.usernameError}</div>}
            <label>Password:</label>
            <input
              name="password"
              type="password"
              onChange={this.updatePassword}
            />
            {this.state.passwordError.length > 0 && <div id ="errorlabel">{this.state.passwordError}</div>}
            <label>College:</label>
            {/* <DropdownButton name ="college" id="dropdown-basic-button" title="College Options">
                <Dropdown.Item active>QC</Dropdown.Item>
                <Dropdown.Item >QCC</Dropdown.Item>
                <Dropdown.Item >Hunter</Dropdown.Item>
            </DropdownButton> */}
            <select name = "college" onChange={this.updateCollege}>
              {/* make queens college default by using selected attribute */}
              <option value ="">----</option>
              <option value="Queens College">Queens</option>
              <option value="Hunter College">Hunter</option>
              <option value="Baruch">Baruch</option>
            </select>
            {this.state.collegeError.length > 0 && <div id ="errorlabel">{this.state.collegeError}</div>}
            <br></br>
            <NavLink to={{
                  pathname: '/profile',
                  state:{
                      username:this.state.username,
                      fullname:this.state.fullname,
                      email:this.state.email,
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
