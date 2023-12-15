import React, { useState } from 'react';
import {Container,CssBaseline,AppBar,Toolbar,Typography,IconButton,Drawer,List,ListItem,ListItemText,Badge,} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
// import ProductList from './ProductList';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event.key === 'Tab' && !event.shiftKey) || event.key === 'Escape')
    ) {
      return;
    }

    setDrawerOpen(open);
  };
   const navigate = useNavigate()


  const drawerContent = (
    <List>
      <ListItem button onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Home" onClick={()=>navigate("/")}/>
      </ListItem>
      <ListItem button onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Products" onClick={()=>navigate("/products")}/>
      </ListItem>
      <ListItem button onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="Your cart" />
      </ListItem>
      <ListItem button onClick={() => setDrawerOpen(false)}>
        <ListItemText primary="About" onClick={()=>navigate("/about")}/>
      </ListItem>
    </List>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            E-Commerce Website
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" style={{ marginRight: 10 }}>
              Welcome, Rittik Maji
            </Typography>
            
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
            { <IconButton color="inherit">
              <Badge  color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton> }
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
      <Container>
        {/* <ProductList /> */}
      </Container>
    </>
  );
}

export default Header;
