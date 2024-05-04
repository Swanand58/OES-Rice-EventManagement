"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
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
    <div className="register-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold text-black text-center">Register</h1>
        {Object.entries(formData).map(([key, value]) => (
          <input
            key={key}
            type={
              key === "password"
                ? "password"
                : key === "email"
                ? "email"
                : "text"
            }
            name={key}
            placeholder={key.replace(/([A-Z])/g, " $1").trim()}
            value={value}
            onChange={handleChange}
            className="input-field"
          />
        ))}
        <button type="submit" className="submit-button">
          Register user
        </button>
        <Link href="/" className="link">
          Go back to Home
        </Link>
        <Link href="/login-nr" className="link">
          Already registered user? Login
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
