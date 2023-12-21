 // App.js
 import React from 'react';
 import Register from '.src/Auth/Register';
 import Login from '.src/Auth/Login';
 import PasswordForm from './Vault/PasswordForm';
 import PasswordList from './Vault/PasswordList';

 const App = () => {
   return (
     <div>
       <Register />
       <Login />
       <PasswordForm />
       <PasswordList />
     </div>
   );
 };

export default App;