import React from "react";

import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import { Link } from "gatsby"


const useStyles = makeStyles(theme => ({
  appBar: {
    color: "#233348",
    backgroundColor: "#FFF",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  drawerList: {
    width: 250,
  },
  drawerToggle: {
    padding: 20,
  },
}))


interface Props {
  companyName: string
}


const Navbar: React.FC = () => {

  // show navbar not on landing -> on landing only ask for the use-case
    // or ask on content page who you are / the other one is 


  // --- Content /  --- 

  // Trainingsmaterial: Webinare + Text

  // Apps: Text + Link

  // Game: Text + Link

  // Exhibitions: ?? unclear

  // Performance:
      // embedded live stream et.c

  // news entries

  // eshop-page


  // ----

  // internal project management -> drive / discord / stuff


  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navLinks: {displayText: string, link: string, external?: boolean}[] = [
    { displayText: "Home", link: "/" },
    { displayText: "Content", link: "/discord" },
    { displayText: "News", link: "/services" },
    { displayText: "About", link: "/about" },
    { displayText: "Admin", link: "/admin/#", external: true },
  ]

  return (
    <React.Fragment>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden smUp>
            <IconButton
              className={classes.drawerToggle}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.toolbarTitle}
          >
            ReInherit
          </Typography>

          <Hidden xsDown>
            {navLinks.map(item => (
              <Button color="inherit" key={item.displayText}>
                {item.external ? <a target="_blank" style={{color:"inherit", textDecoration:"inherit"}} href={item.link}>{item.displayText}</a> : <Link style={{color:"inherit", textDecoration:"inherit"}} to={item.link}>{item.displayText}</Link>}
              </Button>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List className={classes.drawerList}>

          {navLinks.map((item, index) => (
            <ListItem button key={item.displayText}>
              <ListItemText primary={item.displayText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  )

  
}


export default Navbar;