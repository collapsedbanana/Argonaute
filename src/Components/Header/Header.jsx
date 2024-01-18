import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, SwipeableDrawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/img/logo.png'; // Ensure you have your logo at this path

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the pixel value to match your mobile breakpoint

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    document.body.classList.toggle('lock-scroll', !mobileOpen);
  };
  

  const menuItems = [
    { label: 'Notre vision', path: '/' },
    { label: 'DataViz', path: '/dataviz' },
    { label: 'À propos de nous', path: '/info' },
    { label: 'Contact', path: '/' }
  ];

  const drawer = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button component={Link} to={item.path} key={index} onClick={() => setMobileOpen(false)}>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            component={Link}
            to="/"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', display: { xs: 'none', md: 'block' } }}>
            {/* Company Name or Logo Text */}
          </Typography>
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ position: 'absolute', right: 15 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            menuItems.map((item, index) => (
              <Button key={index} color="inherit" component={Link} to={item.path}>
                {item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
      >
        {drawer}
      </SwipeableDrawer>
    </div>
  );
}

export default Header;
