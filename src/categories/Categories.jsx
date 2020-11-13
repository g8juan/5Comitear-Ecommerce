import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// STYLES
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Route } from "react-router-dom";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    backgroundColor: theme.palette.background,
    margin: "0 auto",
  },
  title: {
    margin: "1.5rem",
    fontSize: "1.5rem",
  },
  buttonDelete: {
    margin: "0.5rem",
    "&:hover": {
      cursor: "pointer",
      color: "red",
    },
  },
  buttonEdit: {
    margin: "1rem 1.75rem",
    "&:hover": {
      cursor: "pointer",
      color: "red",
    },
    color: "black",
  },
  categoryName: {
    fontVariant: "small-caps",
    "&:hover": {
      color: "dark-blue",
      textDecoration: "none",
    },
  },
}));

export default function Categories({
  categories,
  userType,
  handleDelete,
  handleEdit,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.title}>
        <DehazeIcon /> CATEGORIES{" "}
      </p>
      <Divider />
      <div className={classes.title}></div>
      <List component="nav" aria-label="main mailbox folders">
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <ListItem
                button
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  className={classes.categoryName}
                  to={`categories/${category.id}`}
                >
                  <ListItemText primary={category.name.toUpperCase()} />
                </Link>
                {userType === "3" || userType === "2" ? (
                  <div>
                    <Link to="/admin/category/update">
                      <EditOutlinedIcon
                        onClick={() => handleEdit(category.id)}
                        className={classes.buttonEdit}
                      />
                    </Link>
                    <DeleteIcon
                      className={classes.buttonDelete}
                      onClick={() => handleDelete(category.id)}
                    />
                  </div>
                ) : null}
              </ListItem>
              <Divider />

              <Route exact path="/" />
            </div>
          );
        })}
      </List>
    </div>
  );
}
