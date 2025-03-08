// src/components/AuthForm.jsx
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUser } from '../context/UserContext';

function AuthForm({ type = 'login' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: 'consumer'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const isLogin = type === 'login';
  const title = isLogin ? 'Login to Your Account' : 'Create an Account';
  const buttonText = isLogin ? 'Login' : 'Register';
  const redirectText = isLogin 
    ? "Don't have an account? " 
    : "Already have an account? ";
  const redirectLink = isLogin ? '/register' : '/login';
  const redirectLinkText = isLogin ? 'Register' : 'Login';
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing in a field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        // Redirect to the page they were trying to access or to home
        const from = location.state?.from?.pathname || '/';
        navigate(from);
      } else {
        await register(formData);
        navigate('/login', { 
          state: { message: 'Registration successful! Please login.' } 
        });
      }
    } catch (error) {
      setErrors({
        ...errors,
        form: error.message || 'An error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-form-container">
      <h2 className="auth-title">{title}</h2>
      
      {location.state?.message && (
        <div className="message success">{location.state.message}</div>
      )}
      
      {errors.form && (
        <div className="message error">{errors.form}</div>
      )}
      
      <form className="auth-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? 'input-error' : ''}
            autoComplete="email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? 'input-error' : ''}
              autoComplete={isLogin ? 'current-password' : 'new-password'}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        {!isLogin && (
          <>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={errors.confirmPassword ? 'input-error' : ''}
                autoComplete="new-password"
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
            
            <div className="form-group">
              <label>Account Type</label>
              <div className="role-options">
                <label className="role-option">
                  <input
                    type="radio"
                    name="role"
                    value="consumer"
                    checked={formData.role === 'consumer'}
                    onChange={handleChange}
                  />
                  <span>Consumer</span>
                </label>
                <label className="role-option">
                  <input
                    type="radio"
                    name="role"
                    value="vendor"
                    checked={formData.role === 'vendor'}
                    onChange={handleChange}
                  />
                  <span>Vendor</span>
                </label>
              </div>
            </div>
          </>
        )}
        
        {isLogin && (
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>
        )}
        
        <button 
          type="submit" 
          className="btn btn-primary btn-block"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : buttonText}
        </button>
      </form>
      
      <div className="auth-separator">
        <span>OR</span>
      </div>
      
      <div className="social-auth">
        <button className="btn btn-social btn-google">
          Continue with Google
        </button>
        <button className="btn btn-social btn-facebook">
          Continue with Facebook
        </button>
      </div>
      
      <p className="auth-redirect">
        {redirectText}
        <Link to={redirectLink}>{redirectLinkText}</Link>
      </p>
    </div>
  );
}

AuthForm.propTypes = {
  type: PropTypes.oneOf(['login', 'register'])
};

export default AuthForm;