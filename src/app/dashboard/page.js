// src/app/dashboard/page.js

"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Dashboard = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("You need to sign in to access the dashboard");
    }
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return <p>Please sign in to access the dashboard.</p>;
  }

  return (
    <div className="container mx-auto mt-20 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Dashboard</h2>

      <p>Welcome, {session.user.email}</p>

      <button
        onClick={() => signOut()}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
