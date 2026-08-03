import { useState, useRef } from 'react';

// LoginForm - using useState for controlled inputs and useRef to focus after login
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ref for username input so we can focus it after login
  const usernameRef = useRef(null);

  // handle login button click
  const handleLogin = (e) => {
    e.preventDefault(); // don't reload the page

    alert('Login Successful! Welcome ' + username);

    // clear both fields
    setUsername('');
    setPassword('');

    // focus back to username field
    usernameRef.current.focus();
  };

  return (
    <div>
      <h2>🔐 Login Form</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          ref={usernameRef}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
