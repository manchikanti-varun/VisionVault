import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/loginSignup.css';

const LoginSignup = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const changeHandle = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleToggle = () => {
        setIsSignup(!isSignup);
    };

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:4000/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Error: ${text}`);
            }

            const responseData = await response.json();
            if (responseData.success) {
                localStorage.setItem("auth-token", responseData.token);
                navigate('/');
            } else {
                throw new Error(responseData.message || 'Signup failed');
            }
        } catch (error) {
            setError(error.message);
            window.alert(error.message); // Show alert with error message
            console.error("Error:", error);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:4000/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Error: ${text}`);
            }

            const responseData = await response.json();
            if (responseData.success) {
                localStorage.setItem("auth-token", responseData.token);
                navigate('/');
            } else {
                throw new Error(responseData.message || 'Login failed');
            }
        } catch (error) {
            setError(error.message);
            window.alert(error.message); // Show alert with error message
            console.error("Error:", error);
        }
    };

    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
                {error && <p className="error-message">{error}</p>}
                <div className="login-signup-fields">
                    {isSignup &&
                        <input
                            type="text"
                            name="username"
                            placeholder="Your Name"
                            value={formData.username}
                            onChange={changeHandle}
                        />
                    }
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={changeHandle}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={changeHandle}
                    />
                </div>
                <button onClick={isSignup ? handleSignup : handleLogin}>
                    {isSignup ? 'Sign Up' : 'Login'}
                </button>
                <p className="login-signup-toggle">
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <span onClick={handleToggle} style={{ cursor: 'pointer', color: 'blue' }}>
                        {isSignup ? 'Click here' : 'Click here'}
                    </span>
                </p>
                {isSignup && (
                    <div className="login-signup-agree">
                        <input type="checkbox" />
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginSignup;
