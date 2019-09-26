import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";

import Post from './Post';
import {posts} from './../Content/posts';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Postlist = (props) => {
  const classes = useStyles();
  
  
  return (
    <div className={classes.root} style={{padding: 30}}>
      <Grid container spacing={3}>
        { posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Post image={post.image} title={post.title} excerpt={post.excerpt} />
            </Grid>
          )})
        } 
      </Grid>
    </div>
  );
}

export default Postlist;