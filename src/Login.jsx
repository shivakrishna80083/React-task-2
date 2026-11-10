function Login({ onLogin }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">🔐</div>

        <h2>Welcome Back!</h2>
        <p>Please login to access your dashboard.</p>

        <button className="login-btn" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;