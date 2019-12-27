import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//for react-bootstrap

const options = [
    'one', 'two', 'three'
]
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            username:"",
            password:"",
            collegeName:""
        };
      }
render(){
  return (
    <div className="App">
      <form>
        <p>First name:</p>
            <input
            type="text"
            />
        <p>Last name:</p>
        <input
          type="text"
        />
        <p>Username:</p>
        <input
          type="text"
        />
        <p>Password:</p>
        <input
          type="text"
        />
        <p>College:</p>
        <DropdownButton id="dropdown-basic-button" title="College Options">
            <Dropdown.Item active>QC</Dropdown.Item>
            <Dropdown.Item >QCC</Dropdown.Item>
            <Dropdown.Item >Hunter</Dropdown.Item>
        </DropdownButton>
      </form>
    </div>
  );
}
}

export default Signup;
