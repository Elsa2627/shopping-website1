import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const Cart = ({ cart, removeFromCart, updateQuantity, goToCheckout, goToHome }) => {
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Mon Panier
            </Typography>

            {cart.length === 0 ? (
                <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                    Votre panier est vide.
                </Typography>
            ) : (
                <Grid container spacing={4} justifyContent="center">
                    {cart.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                            <Card style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt={product.title}
                                    style={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="h6">{product.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Prix : {product.price} USD
                                    </Typography>
                                    <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                            disabled={product.quantity === 1}
                                            style={{ minWidth: '30px', marginRight: '10px' }}
                                        >
                                            -
                                        </Button>
                                        <Typography variant="body1">{product.quantity}</Typography>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                            style={{ minWidth: '30px', marginLeft: '10px' }}
                                        >
                                            +
                                        </Button>
                                    </Box>
                                    <Box mt={2} display="flex" justifyContent="flex-start">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => removeFromCart(product.id)}
                                            style={{ marginLeft: '0px' }} // Alignement à gauche
                                        >
                                            Retirer
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            <Box mt={4} textAlign="center">
                <Typography variant="h5" gutterBottom>
                    Total : {total.toFixed(2)} USD
                </Typography>

                {/* Afficher le bouton "Payer" seulement si le panier contient des articles */}
                {cart.length > 0 && (
                    <Button
                        variant="contained"
                        onClick={goToCheckout}
                        style={{
                            marginTop: '20px',
                            width: '80%',
                            backgroundColor: '#FF9900', // Couleur type Amazon
                            color: '#fff',
                            padding: '10px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            borderRadius: '6px', // Coins légèrement arrondis
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Ombre légère
                            transition: 'background-color 0.3s ease', // Transition pour un effet au survol
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e07b00')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FF9900')}
                    >
                        Payer maintenant
                    </Button>
                )}

                {/* Bouton "Retour à l'accueil" toujours visible */}
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={goToHome}
                    style={{
                        marginTop: '10px',
                        width: '80%',
                        border: '1px solid #1976d2', // Bordure bleue
                        color: '#1976d2',
                        padding: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '6px', // Coins légèrement arrondis
                    }}
                >
                    Retour à l'accueil
                </Button>
            </Box>
        </div>
    );
};

export default Cart;
