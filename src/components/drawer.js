import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  link: { textDecoration: "none", color: "blue", fontSize: "20px" },
  icon: { color: "black" },
  logo: { flexGrow: "1", cursor: "pointer" },
  draw: { background: "red" }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="right"
        sx={{ width: 250, color: "#fff" }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Toolbar sx={{ backgroundColor: "primary.main" }}>
          <Typography variant="h5" className={classes.logo}>
            Menu
          </Typography>
          <CloseIcon />
        </Toolbar>
        <div sx={{ backgroundColor: "primary.main" }} height="100vh">
          <List height="100vh">
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/gallery" className={classes.link}>
                  Gallery
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/contact" className={classes.link}>
                  Contact
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />

          </List>
        </div>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
