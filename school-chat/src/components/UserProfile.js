import React from 'react';

//figured it out using this link https://medium.com/@bopaiahmd.mca/how-to-pass-props-using-link-and-navlink-in-react-router-v4-75dc1d9507b4

class UserProfile extends React.Component{
    
    componentDidMount() {
        /*code disables user to go back since going back would allow the user 
        to go back to the signup page but the user already signed up.*/
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
    }
    //console.log("profile",this.props.location.state.username);
    render(){
        return(
            <div>
                <div id = "nameandcollege">
                    <p>{this.props.location.state.fullname}</p>
                    <p>Student @ {this.props.location.state.college}</p>
                </div>
                <p>The username is {this.props.location.state.username}</p>
                <p>The password is {this.props.location.state.password}</p>
                <p>The college you go to is: {this.props.location.state.college}</p>
                <p>Your current email set is:{this.props.location.state.email}</p>
                <form id="formforprofile">
                    {/* send component up  */}
                    <label>
                        Change password:
                    </label>
                    <input
                        name="password"
                        type="password"
                    />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
export default UserProfile;

