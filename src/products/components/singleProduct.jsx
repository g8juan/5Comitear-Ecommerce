import React from "react";
import { Link } from "react-router-dom";

//STYLE
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "react-bootstrap";

const useStyles = makeStyles({
  rootCard: {
    marginTop: 50,
    maxWidth: 500,
    margin: "0 auto",
  },
  media: {
    height: 500,
    width: "auto",
  },
  buttons: {
    margin: "0 auto",
  },
  buttonDelete: {
    margin: "auto 2.5rem",
    "&:hover": {
      cursor: "pointer",
      color: "red",
    },
  },
});

export default function SingleProduct({
  singleProduct,
  userType,
  handleDelete,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.rootCard}>
      <CardActionArea>
        <CardMedia className={classes.media} image={singleProduct.thumbnail} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {singleProduct.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {singleProduct.description}
            <br />
            Price: $ {singleProduct.price} ARS
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {userType === "2" || userType === "3" ? (
          <Button
            as={Link}
            to="/admin/products/update"
            size="small"
            color="primary"
            className={classes.buttons}
          >
            Edit Product
          </Button>
        ) : (
          <Button size="small" color="primary" className={classes.buttons}>
            Add to cart
          </Button>
        )}
        <Button size="small" color="primary" className={classes.buttons}>
          Reviews
        </Button>
        {userType === "2" || userType === "3" ? (
          <div>
          <DeleteIcon className={classes.buttonDelete} 
          onClick={() => handleDelete(singleProduct.id)}
          />
          {/* {!singleProduct.id ?
            <DeleteIcon
              className={classes.buttonDelete}
              onClick={() => handleDelete(singleProduct)}
            />
            
            {/* {!singleProduct.id ?
            (<div>
              <Modal
                open={true}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div
                  style={{
                    display: "flex",
                    width: 200,
                    height: 100,
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    margin: "0 auto",
                    marginTop: 200,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <h2 id="simple-modal-title">Warning!</h2>
                    <p id="simple-modal-description">Are you sure you want to delete this product?</p>
                  </div>
                  <button>Cancel</button>
                  <button >Confirm</button>
                </div>
              </Modal>
            </div>) : null } */}
          </div>
        ) : null}
      </CardActions>
    </Card>
  );
}
