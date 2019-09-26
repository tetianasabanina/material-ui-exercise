import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import NavBar from './Components/NavBar';
import PostList from './Components/Postlist';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
        <Toolbar>
            <Typography variant="h5"
              color="inherit">
              Material UI
           </Typography>
           <NavBar />
          </Toolbar>
        </AppBar>
        <PostList />
      </div>
    );
  }
}
export default App;
