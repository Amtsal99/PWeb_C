"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      localStorage.setItem("auth", "true");
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="bg-blue-50 flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={handleLogin} className="items-end gap-2 flex flex-col">
          <div className="flex gap-4">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            className="bg-purple-400 px-4 py-1 rounded-md mt-4"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}