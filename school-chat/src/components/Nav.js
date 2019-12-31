import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
/*
  1)About Us
  2)Register
  3)
*/
function Nav() {
  return (
    <nav>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className='typography'>
            Course-Chat
          </Typography>
          <Button color="inherit">Login</Button>
          <Link color = "inherit" to ="/">About</Link>
          <Link to ="/signup">Sign up</Link>
        </Toolbar>
      </AppBar>
        <h3>Image here</h3>
        <ul className="nav-links">
            <li><Link to ="/">About</Link></li>
            <li><Link to ="/signup">Sign up</Link></li>
            <li>Log In</li>
            <li>User Profile</li>
        </ul>
    </nav>
  );
}

export default Nav;
