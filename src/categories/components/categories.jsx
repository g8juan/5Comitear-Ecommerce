import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// STYLES
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DehazeIcon from '@material-ui/icons/Dehaze';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    backgroundColor: theme.palette.background,
    margin: '0 auto'
  },
  title: {
    margin: '1.5rem',
    fontSize: '1.5rem'  
  }
}));

export default function Categories({categories}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.title}><DehazeIcon /> CATEGORIES </p>
      <Divider/>
      <div className={classes.title}></div>
      <List component="nav" aria-label="main mailbox folders">
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <ListItem button>
              <ListItemText primary={(category.name).toUpperCase()} />
            </ListItem>
            <Divider />
          </div>
        )
      })}
      </List>
      
    </div>
  );
}