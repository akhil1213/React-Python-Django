import React from 'react';
import {makeStyles, List, ListItem, ListItemAvatar, Avatar, FolderIcon, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core'
 import DeleteIcon from '@material-ui/icons/Delete'
 import EditIcon from '@material-ui/icons/Edit';
 import AddBoxIcon from '@material-ui/icons/AddBox';
 import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//figured it out using this link https://medium.com/@bopaiahmd.mca/how-to-pass-props-using-link-and-navlink-in-react-router-v4-75dc1d9507b4

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpened:false
        };
    }
    openModal = () => {
        this.setState({isModalOpened:true});
        console.log(this.state.isModalOpened);
    }
    closeModal = () =>{
        this.setState({isModalOpened:false})
        console.log(this.state.isModalOpened);
        // need to refresh the component since the state changed
    }
    componentDidMount() {
        /*code disables user to go back since going back would allow the user 
        to go back to the signup page but the user already signed up.*/
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
    }
    getStyles () {
        return makeStyles(theme => ({
            root: {
              flexGrow: 1,
              maxWidth: 752,
            },
            demo: {
              backgroundColor: theme.palette.background.primary
            },
            title: {
              margin: theme.spacing(4, 0, 2),
            },
          }));
    }
    //console.log("profile",this.props.location.state.username);
    render(){
        return(
            <div className="App">
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
                <div>
                    <List id = "list" className={this.getStyles().demo}>
                        <ListItem className ="listItem" id = "topRowOfList">
                            <ListItemText
                                primary="Classes Taken during Spring Semester"
                            />
                            <ListItemSecondaryAction>
                                <IconButton onClick={this.openModal}>
                                    <AddBoxIcon/>
                                </IconButton>
                                <Dialog open={this.state.isModalOpened} onClose={this.closeModal} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                    <DialogContent>
                                        {/* After debugging for an hour , the dialog should not be inside
                                         icon button because inside the dialog there is a cancel button and for some reason icon buttons onclick method
                                         kept overriding the child button of dialog's onclick method. */}
                                    <DialogContentText>
                                        Enter the class name, professor name, and time below:
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="classname"
                                        label="Class name:"
                                        type="text"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="professor name"
                                        label="Professor name:"
                                        type="text"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="time"
                                        label="Time"
                                        type="time"
                                        fullWidth
                                    />
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={this.closeModal} color="primary">
                                        Cancel
                                    </Button>
                                    </DialogActions>
                                    </Dialog>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem className = "listItem">
                            <ListItemText
                                primary="CS351 Andy Abreu 4:10-5:00"
                            />
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>
            </div>

        );
    }
}
export default UserProfile;

