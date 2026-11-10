function UserList() {
  const users = [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi@gmail.com",
      age: 25,
      city: "Hyderabad",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      age: 23,
      city: "Bangalore",
      role: "UI Designer",
    },
    {
      id: 3,
      name: "Krishna Reddy",
      email: "krishna@gmail.com",
      age: 28,
      city: "Chennai",
      role: "Backend Developer",
    },
    {
      id: 4,
      name: "Suresh Kumar",
      email: "suresh@gmail.com",
      age: 26,
      city: "Mumbai",
      role: "Full Stack Developer",
    },
    {
      id: 5,
      name: "Anjali Reddy",
      email: "anjali@gmail.com",
      age: 24,
      city: "Pune",
      role: "React Developer",
    },
  ];

  return (
    <section className="user-section">
      <div className="section-heading">
        <h2>Team Members</h2>
        <p>Meet our talented team members</p>
      </div>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>

            <h3>{user.name}</h3>

            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>City:</strong> {user.city}</p>

            <span className="user-role">{user.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserList;