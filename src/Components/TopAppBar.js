import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BuildIcon from '@material-ui/icons/Build';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

const TopAppBar = () => {
     return (
      <div>
         <AppBar position='relative'>
          <Toolbar className="toolbar">
            <Grid container 
                  direction="row"
                  justify="space-between"
                  alignItems="center">
              <Grid item >
                <IconButton>
                  <MenuIcon/>
                </IconButton>
              </Grid>
              <Grid item >
                <Typography color='secondary' variant='h4'>
                  <BuildIcon/>
                  Material-UI-testing
                </Typography>
              </Grid>
              <Grid item>
                <div className="buttons-section">
                    <Button color='default'>Default</Button>
                    <Button color='primary' variant='contained'>Primary contained</Button>
                    <Button color='secondary' variant='outlined'>Secondary outlined</Button>
                </div> 
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
         
      </div>
    );
  }

export default TopAppBar;
