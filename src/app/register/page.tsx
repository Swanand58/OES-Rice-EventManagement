"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Prepare JSON payload
    const jsonPayload = JSON.stringify(formData);

    // Simulate an API call
    try {
      // Here, you would typically use fetch or axios to send jsonPayload to your API
      // const response = await fetch('your-api-endpoint', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: jsonPayload
      // });
      console.log("JSON Payload:", jsonPayload);

      alert("Registration successful! Now login to continue.");
      // Redirect to the login page after successful registration
      router.push("/login-nr");
    } catch (error) {
      console.error("Failed to register:", error);
      // Handle errors if necessary
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-xl font-bold text-black">Register new user</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="mb-2 p-2 border rounded text-black"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="mb-2 p-2 border rounded text-black"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="mb-2 p-2 border rounded text-black"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          className="mb-2 p-2 border rounded text-black"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mb-2 p-2 border rounded text-black"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
      <Link className="mt-4 text-blue-500 hover:underline" href="/">
        Go back to Home
      </Link>
      <Link className="text-blue-500 hover:underline" href="/login-nr">
        Already registered user? Login
      </Link>
    </div>
  );
};

export default RegisterPage;
