   // Login.js
   import React, { useState } from 'react';

   const Login = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const handleLogin = () => {
       // Implement login logic (e.g., make API call)
       console.log('User logged in:', { username, password });
     };

     return (
       <div>
         <h2>Login</h2>
         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
         <button onClick={handleLogin}>Login</button>
       </div>
     );
   };

   export default Login;
