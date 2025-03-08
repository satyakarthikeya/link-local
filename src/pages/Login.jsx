// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { login, signup } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const role = login(email, password);
    if (role === 'consumer') navigate('/consumer');
    else if (role === 'vendor') navigate('/vendor');
    else alert('Invalid credentials. Try Satya@gmail.com or karthikeya@gmail.com with "test".');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !role) {
      alert('Please fill in all fields.');
      return;
    }
    const success = signup(name, email, password, role);
    if (success) {
      alert('Signup successful! Please log in.');
      setIsLogin(true);
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
    } else {
      alert('Email already exists. Try a different email.');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
  };

  return (
    <section className="auth">
      <div className="container">
        <div className="form-container card fade-in">
          {isLogin ? (
            <>
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
                <button className="btn btn-primary" type="submit">Login</button>
              </form>
              <p className="toggle-text">
                Not a member? <span onClick={toggleForm}>Signup here</span>
              </p>
            </>
          ) : (
            <>
              <h2>Signup</h2>
              <form onSubmit={handleSignup}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
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
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="consumer">Consumer</option>
                  <option value="vendor">Vendor</option>
                </select>
                <button className="btn btn-primary" type="submit">Signup</button>
              </form>
              <p className="toggle-text">
                Already a member? <span onClick={toggleForm}>Login here</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;