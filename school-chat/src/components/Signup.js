import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//for react-bootstrap
import {MenuItem,Select, Input, InputLabel} from '@material-ui/core'


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
      college:'',
      style:{
        display:'block'
      }
    };
  }
  handleClick = (e) =>{
    if(!this.validateForm())e.preventDefault();
    /*if validatedform is false so its not validated then you prevent the 
    default action from happening which is going to user profile page.*/
  }
  validateForm = () =>{
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
            <div className="spaceForInput">
              <Input placeholder="Full Name" name="fullname"
                  type="text" 
                  onChange={this.updateFName}/>
                  {this.state.fullNameError.length > 0 && <div id ="errorlabel">{this.state.fullNameError}</div>}
            </div>
            <div className="spaceForInput">
            <Input placeholder="E-mail" name="email"
              type="email"
              onChange={this.updateEmail}/>
            {this.state.emailError.length > 0 && <div id ="errorlabel">{this.state.emailError}</div>}
            </div>
            <div className="spaceForInput">
              <Input
                placeholder="Username"
                name="username"
                type="text"
                onChange={this.updateUsername}
              />
              {this.state.usernameError.length > 0 && <div id ="errorlabel">{this.state.usernameError}</div>}
            </div>
            <div className="spaceForInput">
              <Input
                placeholder="password"
                name="password"
                type="password"
                onChange={this.updatePassword}
              />
              {this.state.passwordError.length > 0 && <div id ="errorlabel">{this.state.passwordError}</div>}
            </div>
            {/* <DropdownButton name ="college" id="dropdown-basic-button" title="College Options">
                <Dropdown.Item active>QC</Dropdown.Item>
                <Dropdown.Item >QCC</Dropdown.Item>
                <Dropdown.Item >Hunter</Dropdown.Item>
            </DropdownButton> */}
            <InputLabel id="inline" id="label">College</InputLabel>
            <Select className="spaceForInput" labelId="label" id="select" name = "college" onChange={this.updateCollege}>
              {/* make queens college default by using selected attribute */}
              <MenuItem value ="">----</MenuItem>
              <MenuItem value="Queens College">Queens</MenuItem>
              <MenuItem value="Hunter College">Hunter</MenuItem>
              <MenuItem value="Baruch">Baruch</MenuItem>
            </Select>
            {this.state.collegeError.length > 0 && <div id ="errorlabel">{this.state.collegeError}</div>}
            <NavLink to={{
                  pathname: '/profile',
                  state:{
                      username:this.state.username,
                      fullname:this.state.fullname,
                      email:this.state.email,
                      password:this.state.password,
                      college:this.state.college
                  },
                }} onClick={this.handleClick} activeStyle={{ color: 'black' }} className="navLink">Submit</NavLink>
          </form>
        </div>
      );
    }
}

export default Signup;

