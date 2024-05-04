"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    if (username === "admin" && password === "admin") {
      router.push("/events"); // Redirect to the admin dashboard
      setLoading(false);
      return; // Exit the function to prevent further processing
    }

    try {
      const response = await fetch("your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login. Check your username and password.");
      }

      const data = await response.json();

      router.push("/events");
    } catch (error) {
      let errorMessage = "Failed to login";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="form-container" onSubmit={handleLogin}>
        <h1 className="text-xl font-bold text-black">Login with Rice NetId</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2 p-2 border rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 p-2 border rounded text-black"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <Link className="mt-4 text-blue-500 hover:underline" href="/">
          Go back to Home
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
