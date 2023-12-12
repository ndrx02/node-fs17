import { useState } from "react";
// Component login pronto, aspettiamo node.js
export function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
