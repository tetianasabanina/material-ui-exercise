import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import Post from './Post';
import {posts} from './../Content/posts';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
}));

const Postlist = (props) => {
  const classes = useStyles();
  
  
  return (
    <div className={classes.root} style={{marginTop: 20, padding: 30}}>
      <Grid container spacing={3}>
        { posts.map((post) => {
          return (
            <Grid item key={post.title} xs={12} sm={6} md={4} lg={3}>
              <Post image={post.image} alt={post.alt} title={post.title} excerpt={post.excerpt} />
            </Grid>
          )})
        } 
      </Grid>
    </div>
  );
}

export default Postlist;