"use client";
import React from "react";
import { useState } from "react";
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
    <div className="login-nr-container">
      <form className="form-nr-container" onSubmit={handleLogin}>
        <h1 className="text-xl font-bold text-black flex justify-center items-center">
          Login
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="mb-2 p-2 border rounded text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 p-2 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <div className="links-container">
          <Link className="link" href="/">
            Go back to Home
          </Link>
          <Link className="link" href="/register">
            Don't have a Login? Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
