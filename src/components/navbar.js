import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./drawer";
import mainLogo from "../images/logo-cropped.png";
import "../App.css";


const useStyles = makeStyles((theme) => ({
  navlinks: { marginLeft: theme.spacing(10), display: "flex" },
  logo: { flexGrow: "1", cursor: "pointer" },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(2),
    "&:hover": { color: "orange", borderBottom: "1px solid black" },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar
        style={{
          height: "120px",
          background: "#fae017",
          color: "black",
        }}
      >
        <div>
        <img src={mainLogo} alt="mainLogo"/>
        </div>
        <Typography
          style={{ textAlign: "center", fontSize: "2em" }}
          variant="h4"
          className={classes.logo}
        >
          <div>
            Wolves Solutions Limited
          </div>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/gallery" className={classes.link}>
              Gallery
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
