import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const Favorites = ({ favorites, removeFromFavorites, goToHome }) => {
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                My Favorites
            </Typography>

            {favorites.length === 0 ? (
                <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                    You haven't added any products to your favorites yet.
                </Typography>
            ) : (
                <Grid container spacing={4} justifyContent="center">
                    {favorites.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                            <Card style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image || '/placeholder.png'}
                                    alt={product.title}
                                    onError={(e) => {
                                        e.target.src = "/placeholder.png"; 
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="h6">{product.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Prix : {product.price} USD
                                    </Typography>
                                    <Box display="flex" justifyContent="space-between" mt={2}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => removeFromFavorites(product.id)} 
                                        >
                                            Remove from Favorites
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Back to Home button */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={goToHome}
                    style={{
                        backgroundColor: '#1976d2',
                        color: 'white',
                        padding: '10px 20px',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', 
                        borderRadius: '8px'
                    }}>
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default Favorites;
