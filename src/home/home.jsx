import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  div: {
    position: "relative",
    textAlign: "center",
  },
  title: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#545454",
    fontSize: "2.5rem",
    textShadow: "1px 1px 10px black",
  },
  categories: {
    position: "absolute",
    top: "70%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    color: "#545454",
    fontSize: "1.5rem",
    textShadow: "1px 1px 10px black",
  },
  featured: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#545454",
    fontSize: "1.5rem",
    textShadow: "1px 1px 10px black",
  },
  user: {
    position: "absolute",
    top: "70%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    color: "#545454",
    fontSize: "1.5rem",
    textShadow: "1px 1px 10px black",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <img
        style={{ height: '50rem', width: "100%" }}
        src="home-images/fondo.jpeg"
        alt="home"
      />
      <div className={classes.title}>
        <img style={{ width: '85%' }} src={`logos/5mitear-Logo${Math.floor(Math.random() * 7) + 1}.png`} alt="5comitear" />
      </div>
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Link to="/categories">
            <Grid className={classes.categories} item xs={4}>
              {" "}
              CATEGORIES{" "}
            </Grid>
          </Link>
          <Link to="/products">
            <Grid className={classes.featured} item xs={4}>
              {" "}
              FEATURED{" "}
            </Grid>
          </Link>
          <Link to="/login">
            <Grid className={classes.user} item xs={4}>
              {" "}
              USER ACCESS{" "}
            </Grid>
          </Link>
        </Grid>
      </div>
    </div>
  );
}
