import React, { useState } from 'react';

// Task 3 & 5: LoginForm - username/password form with clear after submit
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // handle form submit
  const handleSubmit = (event) => {
    // prevent page from reloading
    event.preventDefault();

    // show alert with entered data
    alert('Username: ' + username + '\nPassword: ' + password);

    // Task 5 refactor: clear inputs after submit
    setUsername('');
    setPassword('');
  };

  return (
    <div style={boxStyle}>
      <h3>🔐 Login Form</h3>

      <form onSubmit={handleSubmit}>
        {/* username input */}
        <div style={{ marginBottom: '10px' }}>
          <label>Username: </label>
          <br />
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* password input */}
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={btnStyle}>
          Login
        </button>
      </form>
    </div>
  );
}

const boxStyle = {
  padding: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '5px',
  boxSizing: 'border-box',
};

const btnStyle = {
  backgroundColor: '#27ae60',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 25px',
  fontSize: '15px',
  cursor: 'pointer',
  marginTop: '5px',
};

export default LoginForm;
