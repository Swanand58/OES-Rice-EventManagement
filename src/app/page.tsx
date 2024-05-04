import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="mb-6 text-xl font-bold text-white">
        Welcome to OConnor Building of Engineering Science at Rice
      </h1>
      <div className="space-y-4">
        <Link
          className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          href="/login"
        >
          Login with Rice NetId
        </Link>
        <Link
          className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-700"
          href="/register"
        >
          Sign-up if not associated to Rice
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
