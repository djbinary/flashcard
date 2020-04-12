import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function Nav() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        
          <Typography varient="title" color="inherit">
Vocalibro
<div className="Links floatRight">
              <ul className="menuList">
                <li className=""><a href="#">Home</a></li>
                <li className=""><a href="#">Setting</a></li>
                <li className="myAccountBadge"><a href="#">Profile</a></li>
              </ul>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
     
    </div>
  );
}

export default Nav;