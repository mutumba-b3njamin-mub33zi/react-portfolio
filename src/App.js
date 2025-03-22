import React, { useState } from 'react';
import Assignment from './components/Assignment';
import Login from './components/Login';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (name) => {
        setIsLoggedIn(true);
        setUsername(name);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <div className="portfolio-container">
                    <div className="user-banner">
                        <span>Welcome, {username}!</span>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </div>
                    <Assignment />
                </div>
            )}
        </div>
    );
}

export default App;