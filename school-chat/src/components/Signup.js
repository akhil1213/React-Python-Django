import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {Box,Container, MenuItem,Select, Input, InputLabel, TextField} from '@material-ui/core'


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
      
    return (this.state.username.length > 0 && this.state.fullname.length > 0 
      && this.state.email.length > 0 && this.state.password.length > 0 && 
      this.state.college.length > 0);
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
        <div id = "signup" className="App">
          <Container maxWidth="sm">
            <Box className='Box' border={1}borderColor="primary.main">
                <form id="formforsignup">
                  <div className="spaceForInput">
                    <TextField placeholder="Full Name" name="fullname"
                        error={this.state.fullNameError.length > 0}
                        label="Full Name"
                        id="standard-error-helper-text"
                        helperText={this.state.fullNameError}
                        type="text" 
                        onChange={this.updateFName}/>
                  </div>
                  <div className="spaceForInput">
                    <TextField label="email" placeholder="E-mail" name="email"
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
                  <TextField
                      id="standard-select-currency"
                      select
                      label="Select"
                      name="college"
                      onChange={this.updateCollege}
                      helperText="Please select your College"
                  >
                    <MenuItem value="Queens College">Queens</MenuItem>
                    <MenuItem value="Hunter College">Hunter</MenuItem>
                    <MenuItem value="Baruch">Baruch</MenuItem>
                  </TextField>
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
            </Box>
          </Container>
        </div>
      );
    }
}

export default Signup;

