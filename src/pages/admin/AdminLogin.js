import React, { useState } from 'react';
import AuthService from '../../services/auth'; 

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    AuthService.login(username, password)
      .then((user) => {
        
        console.log('Login successful:', user);
        
      })
      .catch((error) => {
        
        console.error('Login failed:', error.message);
        
      });
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
