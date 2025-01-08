import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

const Checkout = ({ cart, handleCheckout, goToHome }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');

    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const handlePayment = () => {
        if (cardNumber && expiryDate && cvc && shippingAddress) {
            handleCheckout(shippingAddress);
            alert('Payment successfully completed!');
        } else {
            alert('Please enter all valid information.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Payment
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                Total amount: {total.toFixed(2)} USD
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
                <TextField
                    label="Adresse de livraison"
                    variant="outlined"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    style={{ marginBottom: '20px', width: '300px' }}
                />
                <TextField
                    label="Numéro de carte"
                    variant="outlined"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    style={{ marginBottom: '20px', width: '300px' }}
                />
                <TextField
                    label="Date d'expiration"
                    variant="outlined"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    style={{ marginBottom: '20px', width: '300px' }}
                />
                <TextField
                    label="CVC"
                    variant="outlined"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    style={{ marginBottom: '20px', width: '300px' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePayment}
                    style={{
                        marginTop: '20px',
                        width: '300px',
                        backgroundColor: '#4CAF50',
                        fontSize: '18px',
                        padding: '10px'
                    }}
                >
                    Payer
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={goToHome}
                    style={{ marginTop: '20px', width: '300px', fontSize: '18px', padding: '10px' }}
                >
                    Back to home
                </Button>
            </Box>
        </div>
    );
};

export default Checkout;
