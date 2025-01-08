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
    const [searchQuery, setSearchQuery] = useState(''); // Ajout d'un état local pour gérer la requête de recherche

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
            handleSearch(searchQuery); // Appelle handleSearch en passant la requête
        }
    };
    return (
        <>
            {/* Barre de navigation supérieure */}
            <AppBar position="static" className="navbar">
                <Toolbar className="toolbar">
                    {/* Bouton du menu hamburger */}
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon /> {/* Menu hamburger */}
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

                    {/* Barre de recherche et panier */}
                    <div className="search-cart-container">
                        <form onSubmit={submitSearch} className="search-form">
                            <InputBase
                                placeholder="Recherche..."
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
                                <FavoriteIcon style={{ fontSize: '2rem' }} /> {/* Taille de l'icône augmentée */}
                            </Badge>
                        </IconButton>

                        {/* Panier toujours visible en haut à droite */}
                        <IconButton color="inherit" onClick={setShowCart} className="cart-button">
                            <Badge badgeContent={cartItemCount} color="error">
                                <ShoppingCartIcon style={{ fontSize: '2rem' }} /> {/* Taille de l'icône augmentée */}
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>


            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <ListItem button onClick={goToHome}>
                        <HomeIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Accueil"/>
                    </ListItem>
                    <ListItem button onClick={setShowCart}>
                        <ShoppingCartIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Panier"/>
                        <Badge badgeContent={cartItemCount} color="error"/>
                    </ListItem>
                    {/* Lien vers Favoris */}
                    <ListItem button onClick={setShowFavorites}>
                        <FavoriteIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Favoris"/>
                        <Badge badgeContent={favoriteCount} color="error"/>
                    </ListItem>

                    {/* Lien vers Commandes */}
                    <ListItem button onClick={setShowOrders}>
                        <OrdersIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Voir les commandes"/>
                    </ListItem>


                    <ListItem button onClick={handleLogout}>
                        <LogoutIcon style={{marginRight: '10px'}}/>
                        <ListItemText primary="Déconnexion"/>
                    </ListItem>
                    <button
                        onClick={handleDeleteAccount}
                        style={{
                            marginTop: '10px', // Marges pour le positionner juste en dessous
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            display: 'block' // Pour que le bouton soit en dessous et pas à côté
                        }}
                    >
                        Supprimer le compte
                    </button>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
