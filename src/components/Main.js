import React from 'react';
import { Box, Typography } from '@mui/material';

const Main = ({ showBanner }) => {
    return (
        <>
            {showBanner && (
                <div>
                    {/* Titre au-dessus de la bannière */}
                    <Typography
                        variant="h3"
                        component="h1"
                        align="center"
                        sx={{
                            marginTop: 4,
                            fontWeight: 'bold',
                            color: '#1976d2',
                            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        Welcome to GoShop
                    </Typography>

                    {/* Bannière en dessous */}
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            marginTop: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                        alt="Bannière de GoShop"
                        src="/banner.jpg" // Assure-toi que l'image "banner.jpg" est dans le dossier public
                    />
                </div>
            )}
        </>
    );
};

export default Main;
