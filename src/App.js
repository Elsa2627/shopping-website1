import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Signup from './components/Signup';
import OrderList from './components/OrderList';
import axios from 'axios';


function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showHome, setShowHome] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [showSignup, setShowSignup] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const [loading, setLoading] = useState(true);

    const favoriteCount = favorites.length;

    useEffect(() => {
        let isMounted = true;

        axios
            .get('http://localhost:8080/api/products')
            .then((response) => {
                if (isMounted) {

                    const uniqueProducts = response.data.filter(
                        (product, index, self) =>
                            index === self.findIndex((p) => p.id === product.id)
                    );


                    console.log('Retrieved Products :', response.data);
                    setProducts(uniqueProducts);
                    setFilteredProducts(uniqueProducts);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error retrieving products', error);
                setLoading(false);
            });

       
        return () => {
            isMounted = false;
        };
    }, []);


    if (loading) {
        return <div>Loading products...</div>;
    }



    const handleSearch = (query) => {
        const result = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(result.length ? result : []);
        setShowBanner(false);
        setShowHome(false);
    };


    const addToFavorites = (product) => {
        if (!favorites.find((item) => item.id === product.id)) {
            setFavorites([...favorites, product]);
        }
    };

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (product.stock > 0) {
            if (existingProduct) {
                setCart(
                    cart.map((item) =>
                        item.id === product.id && item.quantity < product.stock
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
            } else {
                setCart([...cart, { ...product, quantity: 1 }]);
            }

            setProducts(
                products.map((item) =>
                    item.id === product.id ? { ...item, stock: item.stock - 1 } : item
                )
            );
        } else {
            alert('Out of stock!');
        }

        if (orders.every((order) => order.status === 'CLOSED')) {
            const newOrder = {
                id: orders.length + 1,
                date: new Date().toLocaleDateString(),
                total: 0,
                items: [...cart, { ...product, quantity: 1 }],
                status: 'TEMP',
            };
            setOrders([...orders, newOrder]);
        }
    };

    const removeFromFavorites = (productId) => {
        setFavorites(favorites.filter((item) => item.id !== productId));
    };

    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete your account? This will delete all your orders and favorites.'
        );

        if (confirmDelete) {
            alert('Account successfully deleted.');
            setIsLoggedIn(false);
            setOrders([]);
            setFavorites([]);
        }
    };

    const handleSignup = (email) => {
        setIsLoggedIn(true);
        setUserEmail(email);
        localStorage.setItem('userEmail', email);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCart(
            cart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const goToCart = () => {
        setShowCart(true);
        setShowOrders(false);
        setShowCheckout(false);
        setShowHome(false);
    };

    const handleLogin = (email) => {
        setIsLoggedIn(true);
        setUserEmail(email);
        localStorage.setItem('userEmail', email);
    };

    const handleCheckout = (address) => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const newOrder = {
            id: orders.length + 1,
            date: new Date().toLocaleDateString(),
            total: cart.reduce((sum, product) => sum + product.price * product.quantity, 0),
            items: [...cart],
            shippingAddress: address,
            status: 'CLOSED',
        };

        setOrders([...orders, newOrder]);
        setCart([]);
        setShowCheckout(false);
        setShowOrders(true);
    };

    const goToCheckout = () => {
        setShowCheckout(true);
        setShowCart(false);
        setShowOrders(false);
        setShowHome(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('userEmail');
    };

    const deleteOrder = (orderId) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    };

    const goToHome = () => {
        setShowFavorites(false);
        setShowCart(false);
        setShowOrders(false);
        setShowHome(true);
        setShowCheckout(false);
        setShowBanner(true);
        setFilteredProducts(products);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <Navbar
                        setShowFavorites={() => {
                            setShowFavorites(true);
                            setShowCart(false);
                            setShowOrders(false);
                            setShowHome(false);
                            setShowCheckout(false);
                            setShowBanner(false);
                        }}
                        setShowCart={() => {
                            setShowCart(true);
                            setShowFavorites(false);
                            setShowOrders(false);
                            setShowHome(false);
                            setShowCheckout(false);
                            setShowBanner(false);
                        }}
                        setShowOrders={() => {
                            setShowOrders(true);
                            setShowFavorites(false);
                            setShowCart(false);
                            setShowHome(false);
                            setShowBanner(false);
                        }}
                        goToHome={goToHome}
                        handleSearch={handleSearch}
                        handleLogout={handleLogout}
                        userEmail={userEmail}
                        cartItemCount={cart.reduce(
                            (sum, product) => sum + product.quantity,
                            0
                        )}
                        favoriteCount={favoriteCount}
                        setShowHome={setShowHome}
                        handleDeleteAccount={handleDeleteAccount}
                    />

                    {showBanner && <Main showBanner={showBanner} />}
                    {showHome && <SearchBar onSearch={handleSearch} />}

                    {showFavorites ? (
                        <Favorites
                            favorites={favorites}
                            goToHome={goToHome}
                            removeFromFavorites={removeFromFavorites}
                        />
                    ) : showCart ? (
                        <Cart
                            cart={cart}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                            handleCheckout={handleCheckout}
                            goToHome={goToHome}
                            goToCheckout={goToCheckout}
                        />
                    ) : showCheckout ? (
                        <Checkout
                            cart={cart}
                            handleCheckout={handleCheckout}
                            goToHome={goToHome}
                        />
                    ) : showOrders ? (
                        <OrderList
                            orders={orders}
                            goToHome={goToHome}
                            goToCheckout={goToCheckout}
                            goToCart={goToCart}
                            deleteOrder={deleteOrder}
                        />
                    ) : (
                        <ProductList
                            products={filteredProducts}
                            favorites={favorites}
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                            addToCart={addToCart}
                        />
                    )}
                </div>
            ) : showSignup ? (
                <Signup handleSignup={handleSignup} />
            ) : (
                <Login
                    handleLogin={handleLogin}
                    toggleSignup={() => setShowSignup(true)}
                />
            )}

            {!isLoggedIn && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button onClick={() => setShowSignup(!showSignup)}>
                        {showSignup
                            ? 'Already have an account? Log in'
                            : 'Create an account'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;

