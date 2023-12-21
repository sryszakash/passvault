 // PasswordForm.js
 import React, { useState } from 'react';

 const PasswordForm = () => {
   const [website, setWebsite] = useState('');
   const [password, setPassword] = useState('');

   const handleSavePassword = () => {
     // Implement password storage logic (e.g., make API call)
     console.log('Password saved:', { website, password });
   };

   return (
     <div>
       <h2>Password Storage</h2>
       <input type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
       <button onClick={handleSavePassword}>Save Password</button>
     </div>
   );
 };

 export default PasswordForm;
