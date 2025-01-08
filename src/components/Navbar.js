import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Badge, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import OrdersIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

const Navbar = ({ setShowFavorites, setShowCart, setShowOrders, handleLogout, userEmail, cartItemCount, favoriteCount, goToHome, handleSearch, handleDeleteAccount, }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        if (handleSearch) {
            handleSearch(searchQuery);
        }
    };
    return (
        <>
            {/* Top Navigation Bar */}
            <AppBar position="static" className="navbar">
                <Toolbar className="toolbar">
                    {/* Hamburger Menu Button */}
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon /> {/* Hamburger Menu */}
                    </IconButton>

                    {/* Logo */}
                    <div style={{display: 'flex', justifyContent: 'center', flex: 1}}>
                        <IconButton edge="start" color="inherit" aria-label="logo" onClick={goToHome}
                                    style={{marginLeft: '280px', marginRight: '50px'}}>
                            <img
                                src="/logo.png"
                                alt="GoShop Logo"
                                style={{width: '80px', height: 'auto'}}
                            />
                        </IconButton>
                    </div>

                    {/* Search Bar and Cart*/}
                    <div className="search-cart-container">
                        <form onSubmit={submitSearch} className="search-form">
                            <InputBase
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleInputChange}
                                inputProps={{'aria-label': 'search'}}
                                className="search-input"
                            />
                            <IconButton type="submit" aria-label="search" className="search-icon">
                                <SearchIcon style={{ color: '#1976d2' }} />
                            </IconButton>
                        </form>
                        <IconButton color="inherit" onClick={setShowFavorites} style={{ marginLeft: '20px' }}>
                            <Badge badgeContent={favoriteCount} color="error">
                                <FavoriteIcon style={{ fontSize: '2rem' }} />
                            </Badge>
                        </IconButton>


                        <IconButton color="inherit" onClick={setShowCart} className="cart-button">
                            <Badge badgeContent={cartItemCount} color="error">
                                <ShoppingCartIcon style={{ fontSize: '2rem' }} />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>


            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <ListItem button onClick={goToHome}>
                        <HomeIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem button onClick={setShowCart}>
                        <ShoppingCartIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Cart"/>
                        <Badge badgeContent={cartItemCount} color="error"/>
                    </ListItem>

                    <ListItem button onClick={setShowFavorites}>
                        <FavoriteIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Favorites"/>
                        <Badge badgeContent={favoriteCount} color="error"/>
                    </ListItem>


                    <ListItem button onClick={setShowOrders}>
                        <OrdersIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="View Orders"/>
                    </ListItem>


                    <ListItem button onClick={handleLogout}>
                        <LogoutIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Log Out"/>
                    </ListItem>
                    <button
                        onClick={handleDeleteAccount}
                        style={{
                            marginTop: '10px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            display: 'block'
                        }}
                    >
                        Delete Account
                    </button>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
