"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg mx-auto mt-12 max-w-md">
      <h2 className="text-center text-xl font-bold mb-4">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-4"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
