import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    button: {
      marginRight: theme.spacing(2),
    },
    
  }));

const Media = () => {
  const classes = useStyles();

  return (
    <div>
        <AppBar position='relative' 
                style={{display: "flex", 
                flexDirection:"row", 
                justifyContent: "center"}}>
              <IconButton className={classes.button} aria-label="FB">
                  <FacebookIcon />
              </IconButton>
              <IconButton className={classes.button} aria-label="Inst">
                  <InstagramIcon />
              </IconButton>
              <IconButton color="secondary" className={classes.button} aria-label="Linkd">
                  <LinkedInIcon />
              </IconButton>
              <IconButton  className={classes.button} aria-label="Mail">
                  <MailOutlineIcon />
              </IconButton>
              <IconButton                  
                  className={classes.button}
                  aria-label="Whatsapp">
                  <WhatsAppIcon />
              </IconButton>
          </AppBar>
      </div>
  );
}
export default Media;