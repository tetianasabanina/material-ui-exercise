import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Home, Book, AccountBox } from '@material-ui/icons';


const NavBar = (props) => {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Typography color="inherit" variant="h6">
                        Home <Home />
               </Typography>
                </ListItemText>


                <ListItemText inset>
                    <Typography color="inherit" variant="h6">
                        Posts <Book />
               </Typography>
                </ListItemText>


                <ListItemText inset>
                    <Typography color="inherit" variant="h6">
                        Contact <AccountBox />
               </Typography>
                </ListItemText>
            </ListItem >

        </List>
    )
}



export default NavBar;