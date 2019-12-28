import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//for react-bootstrap
import  {useForm} from 'react-hook-form';
import {useParams} from 'react-router';


class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      firstname:'',
      lastname:'',
      password:'',
      college:''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
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
          <form onSubmit={this.mySubmitHandler}>
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
                  }
                }} activeStyle={{ color: 'black' }} className="navLink">Submit and go to Profile with data</NavLink>
          </form>
        </div>
      );
    }
}

export default Signup;
