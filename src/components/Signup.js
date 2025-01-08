import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Signup = ({ handleSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && firstName && lastName) {
            handleSignup(email, password, firstName, lastName);
        } else {
            alert('Tous les champs doivent être remplis');
        }
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
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h4" component="h1" style={{ marginBottom: '20px', color: '#1976d2' }}>
                    Créer un compte
                </Typography>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Prénom"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px', /* Coins plus arrondis */
                            },
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Nom"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px', /* Coins plus arrondis */
                            },
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px', /* Coins plus arrondis */
                            },
                        }}
                    />
                    <TextField
                        label="Adresse"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px', /* Coins plus arrondis */
                            },
                        }}
                    />


                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        label="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px', /* Coins plus arrondis */
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 3,
                            mb: 2,
                            padding: '10px',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            backgroundColor: '#007bff',
                            transition: 'background-color 0.3s ease, transform 0.2s ease',
                            '&:hover': {
                                backgroundColor: '#0056b3',
                                transform: 'scale(1.05)', /* Effet de mise en avant au survol */
                            },
                        }}
                    >
                        S'inscrire
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Signup;