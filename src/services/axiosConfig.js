import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderComponent = () => {
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);  

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                // Envoi de la requête GET à l'API Spring Boot pour récupérer la commande
                const response = await axios.get('http://localhost:8080/orders/1');  // Remplace 1 par l'ID réel
                setOrder(response.data);  // Stocke les données de la commande dans l'état
            } catch (error) {
                setError('Error fetching order');
                console.error('There was an error fetching the order:', error);
            }
        };

        fetchOrder();
    }, []);  // Le tableau vide signifie que cette fonction s'exécute au montage du composant

    return (
        <div>
            {error && <p>{error}</p>}
            {order ? (
                <div>
                    <h2>Order ID: {order.id}</h2>
                    <p>Status: {order.status}</p>
                    <p>Total: ${order.total}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default OrderComponent;

