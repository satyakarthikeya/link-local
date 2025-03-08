// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const role = login(email, password);
    if (role === 'consumer') navigate('/consumer');
    else if (role === 'vendor') navigate('/vendor');
    else alert('Invalid credentials. Try Satya@gmail.com or karthikeya@gmail.com with "test".');
  };

  return (
    <section className="auth">
      <div className="container">
        <div className="form-container card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;