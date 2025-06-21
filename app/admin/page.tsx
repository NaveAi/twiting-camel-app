"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "./AuthContext";

const AdminDashboard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="w-full max-w-2xl p-8 space-y-8 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg"
  >
    <div className="text-center">
      <h1 className="text-3xl font-bold">ברוך הבא לממשק הניהול</h1>
      <p className="text-gray-400">מכאן תוכל לנהל את תוכן האתר.</p>
    </div>
    <div className="flex justify-center">
      <button
        onClick={() => signOut(auth)}
        className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 transition-colors"
      >
        התנתק
      </button>
    </div>
  </motion.div>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError("שם המשתמש או הסיסמה שגויים.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-8 space-y-8 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold">ממשק ניהול</h1>
        <p className="text-gray-400">יש להזדהות כדי להמשיך</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            כתובת אימייל
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            סיסמה
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transition-colors"
          >
            התחבר
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default function AdminPage() {
  const { user, loading } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      {loading ? (
        <p>טוען...</p>
      ) : user ? (
        <AdminDashboard />
      ) : (
        <LoginForm />
      )}
    </div>
  );
} 