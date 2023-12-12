import { useState } from "react";
// Component login pronto, aspettiamo node.js
export function SignUp() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    role: "",
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          value={data.name}
          type="text"
        />
        <br />

        <label htmlFor="surname">Surname:</label>
        <input
          name="surname"
          onChange={(e) => setData({ ...data, surname: e.target.value })}
          value={data.surname}
          type="text"
        />
        <br />

        <label htmlFor="role">Role:</label>
        <input
          name="role"
          onChange={(e) => setData({ ...data, role: e.target.value })}
          value={data.role}
          type="text"
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          name="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          type="email"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          name="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          value={data.password}
          type="password"
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
