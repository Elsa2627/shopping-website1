import React, { useState } from 'react';

const Register = ({ handleRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simule l'inscription et passe l'email à handleRegister
        handleRegister(email);
    };

    return (
        <div style={{ marginTop: 20 }}>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Register;
