import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const OrderList = ({ orders, goToHome, goToCheckout, goToCart, finalizeOrder, deleteOrder }) => {
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Order History
            </Typography>

            {orders.length === 0 ? (
                <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                    You haven't placed any orders yet.
                </Typography>
            ) : (
                <Grid container spacing={4} justifyContent="center">
                    {orders.map((order) => (
                        <Grid item key={order.id} xs={12} sm={6} md={4}>
                            <Card
                                style={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6">
                                        Order n° {order.id}
                                    </Typography>
                                    <Typography variant="body2">
                                        Date : {order.date}
                                    </Typography>
                                    <Typography variant="body2">
                                        Total :{' '}
                                        {order.items
                                            .reduce(
                                                (sum, item) =>
                                                    sum + item.price * item.quantity,
                                                0
                                            )
                                            .toFixed(2)}{' '}
                                        USD
                                    </Typography>
                                    <Typography variant="body2">
                                        Delivery Address: {order.shippingAddress}
                                    </Typography>

                                    <Typography variant="body2">
                                        Statut :{' '}
                                        {order.status === 'TEMP'
                                            ? 'Pending Payment'
                                            : 'Closed'}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{ marginTop: '10px' }}
                                    >
                                        Items :
                                        {order.items.map((item) => (
                                            <span key={item.id}>
                                                {' '}
                                                {item.title} (x{item.quantity}){' '}
                                            </span>
                                        ))}
                                    </Typography>

                                    {order.status === 'TEMP' ? (
                                        <div>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                style={{ marginTop: '10px' }}
                                                onClick={() => goToCart(order.items)}
                                            >
                                                Edit Order
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                style={{
                                                    marginTop: '10px',
                                                    marginLeft: '10px',
                                                }}
                                                onClick={() => {
                                                    finalizeOrder(order.id);
                                                    goToCheckout();
                                                }}
                                            >
                                                Pay
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                style={{ marginTop: '10px', marginLeft: '10px' }}
                                                onClick={() => deleteOrder(order.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    ) : (
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            style={{ marginTop: '10px' }}
                                        >
                                            Closed Order (Already Paid)
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={goToHome}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default OrderList;
