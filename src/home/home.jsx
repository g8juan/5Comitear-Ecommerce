import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//BOTONES CHETOS
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

//IMAGENES PARA LOS BOTONES
const images = [
  {
    url: 'home-images/home1.jpeg',
    title: 'CATEGORIES',
    width: '33%',
  },
  {
    url: 'home-images/home2.jpeg',
    title: 'PRODUCTS',
    width: '34%',
  },
  {
    url: 'home-images/home3.jpeg',
    title: 'CART',
    width: '33%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
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
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <img
        style={{ height: '40rem', width: "100%" }}
        src="home-images/fondo.jpeg"
        alt="home"
      />
      <div className={classes.title}>
        <img style={{ width: '100%' }} src={`logos/5mitear-Logo${Math.floor(Math.random() * 7) + 1}.png`} alt="5comitear" />
      </div>
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <Link to={`${"/" + image.title.toLowerCase()}`}>
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                <Link style={{ color: 'white', textDecorationLine: 'none' }} to={`${"/" + image.title.toLowerCase()}`}>{image.title}</Link>
                <span className={classes.imageMarked} />
              </Typography>
            </span>
            </Link>
          </ButtonBase>
        ))}
      </div>
    </div >
  );
}
