# Shopping Website

## Description
Shopping Website is an e-commerce platform that allows users to shop for products online, manage their cart, create favorites, and track their orders.

## Key Features
- **User Management**: Sign up, log in, and account deletion.
- **Product Management**: Search, view, and add products to the cart.
- **Favorites**: Add and remove favorite products.
- **Orders**: Place orders and view purchase history.
- **Admin Features**: Manage users and products through the backend API.

## Project Structure
- **Frontend**: `shopping-website` directory developed in React with Material-UI.
- **Backend**: `ShoppingBackend` directory developed with Spring Boot and Maven.

## Prerequisites
To run this project, you will need:
- **Java 17+**
- **Node.js** (version 16 or newer)
- **npm** or **yarn**
- **Maven**

## Installation

### Backend
1. Navigate to the backend directory:
    ```bash
    cd ShoppingBackend
    ```
2. Compile and run the backend:
    ```bash
    mvn spring-boot:run
    ```
3. Access the Swagger API documentation (if configured):
   [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd shopping-website
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the application:
    ```bash
    npm start
    ```
4. Open the application in your browser at:
   [http://localhost:3000](http://localhost:3000)

## API Documentation
The backend exposes a REST API. Here are the main available routes:

### Users
- **POST /users/signup**: Register a new user.
- **POST /users/login**: Log in a user.
- **DELETE /users/{id}**: Delete a user.
- **GET /users/{userId}/favorites**: Get a user's favorite products.
- **POST /users/{userId}/favorites**: Add a product to favorites.
- **DELETE /users/{userId}/favorites/{productId}**: Remove a product from favorites.

### Products
- **GET /products**: Get the list of available products.
- **GET /products/{id}**: Get details of a specific product.

### Orders
- **POST /orders**: Place an order.
- **GET /orders/{orderId}**: Get order details.

## Technologies Used
- **Frontend**: React, Material-UI
- **Backend**: Spring Boot, Hibernate
- **Database**: H2 (default, configurable for MySQL or PostgreSQL)

## Tests

### Backend
1. Navigate to the backend directory:
    ```bash
    cd ShoppingBackend
    ```
2. Run tests using Maven:
    ```bash
    mvn test
    ```

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd shopping-website
    ```
2. Run tests using npm:
    ```bash
    npm test
    ```

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any improvements or suggestions.

## Authors
This project was developed by **Elsa Saadoun** as part of an academic project.

## License
This project is licensed under the MIT License.