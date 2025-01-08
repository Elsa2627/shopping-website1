import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductList = ({ products, favorites = [], addToFavorites, removeFromFavorites, addToCart }) => {
    const noProducts = products.length === 0;

    return (
        <div>
            {noProducts ? (
                <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                    Aucun produit trouvé.
                </Typography>
            ) : (
                <Grid container spacing={4} justifyContent="center" style={{ marginTop: 20 }}>
                    {products.map((product) => {
                        const isFavorite = favorites.some((item) => item.id === product.id);

                        return (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <Card
                                    style={{
                                        position: 'relative',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    {/* Bouton Favoris en haut à droite */}
                                    <IconButton
                                        onClick={() =>
                                            isFavorite
                                                ? removeFromFavorites(product.id)
                                                : addToFavorites(product)
                                        }
                                        style={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                            color: isFavorite ? '#ff0000' : '#ccc',
                                        }}
                                        aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                                    >
                                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                    </IconButton>

                                    {/* Vérification de l'image */}
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={product.image || '/placeholder.png'} // Image par défaut si aucune n'est disponible
                                        alt={product.name || 'Produit'}
                                        onError={(e) => {
                                            e.target.src = '/placeholder.png'; // Image de remplacement en cas d'erreur
                                        }}
                                    />
                                    <CardContent>
                                        {/* Affichage des données du produit */}
                                        <Typography variant="h6">{product.name}</Typography> {/* Nom du produit */}
                                        <Typography variant="body2" color="textSecondary">
                                            Prix : {product.price} USD
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Stock :{' '}
                                            {product.stock > 0
                                                ? `${product.stock} disponibles`
                                                : 'Stock épuisé'}
                                        </Typography>

                                        {/* Bouton Ajouter au panier */}
                                        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => addToCart(product)}
                                                disabled={product.stock === 0} // Désactiver si stock épuisé
                                                style={{ width: '60%' }}
                                            >
                                                {product.stock === 0 ? 'Indisponible' : 'Ajouter au panier'}
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </div>
    );
};

export default ProductList;
