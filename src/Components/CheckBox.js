import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    maxWidth: 360,
    
  },
}));

const CheckBox =() => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: 20,
        padding: 20
      }}>
    <Typography color="primary" variant='h6'>What programming language are you studing? </Typography>
    <List dense className={classes.root}>
      {['JS', 'TS', 'PHP', 'Python'].map(value => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            
            <ListItemText id={labelId} primary={value} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </div>
  );
}
export default CheckBox;