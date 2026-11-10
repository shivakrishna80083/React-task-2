import UserList from "./UserList";

function Home({ onLogout }) {
  return (
    <div>
      <header className="navbar">
        <h2>React Dashboard</h2>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </header>

      <div className="welcome-section">
        <h1>Welcome to Home Page!</h1>
        <p>You have successfully logged in.</p>
      </div>

      <UserList />
    </div>
  );
}

export default Home;