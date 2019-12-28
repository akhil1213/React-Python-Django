import React from 'react';

//figured it out using this link in 25 minutes its 5;28 am im waiting for girl to come over.. https://medium.com/@bopaiahmd.mca/how-to-pass-props-using-link-and-navlink-in-react-router-v4-75dc1d9507b4
const UserProfile = (props) =>{
    console.log("profile",props.location.state.username);
        return(
            <div className="App">
                <img></img>
                <div id = "nameandcollege">
                    <p>{props.location.state.firstname} {props.location.state.lastname}</p>
                    <p>Student @ {props.location.state.college}</p>
                </div>
                <p>The username is {props.location.state.username}</p>
                <p>The password is {props.location.state.password}</p>
                <p>The college you go to is: {props.location.state.college}</p>
            </div>
        );
    
}
export default UserProfile;

