import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';

const Login = ({ handleLogin, toggleSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Veuillez remplir tous les champs');
            return;
        }
        setError('');
        handleLogin(email);
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8,
                    padding: 3,
                    backgroundColor: '#f7f7f7',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                {error && <Alert severity="error">{error}</Alert>}
                <img src="/logo.png" alt="GoShop Logo" width="100" style={{ marginBottom: '15px' }} />
                <Typography variant="h4" component="h1" style={{ marginBottom: '20px', color: '#1976d2' }}>
                    Welcome To GoShop
                </Typography>

                <form onSubmit={onSubmit} style={{ width: '100%' }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Se connecter
                    </Button>
                </form>

                <Typography variant="body2" style={{ marginTop: '20px' }}>
                    Pas encore de compte ?{' '}
                    <Button
                        variant="text"
                        color="primary"
                        onClick={toggleSignup}
                        style={{ textTransform: 'none', fontWeight: 'bold' }}
                    >
                        Créer un compte
                    </Button>
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
