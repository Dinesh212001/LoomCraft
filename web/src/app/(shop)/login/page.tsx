"use client";

import { useState } from "react";
import Link from "next/link";

type Mode = "login" | "register";

// Navbar "Login" link. UI is ready; connect it to the backend (POST /api/auth/login, /api/auth/register) later.
export default function LoginPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    if (mode === "register" && name.length < 2) next.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email";
    if (password.length < 6) next.password = "Password must be at least 6 characters";

    setErrors(next);
    setNotice("");
    if (Object.keys(next).length === 0) {
      setNotice("Details look good. Account sign in will start working once the customer login API is connected.");
    }
  }

  const input = (name: string) =>
    `mt-1 w-full rounded-md border bg-white px-4 py-3 text-sm outline-none transition focus:border-[#a47748] ${
      errors[name] ? "border-red-600" : "border-[#dccfbf]"
    }`;

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f5efe7] px-5 py-14">
      <div className="w-full max-w-md rounded-2xl border border-[#e5d8c8] bg-white p-7 shadow-[0_10px_30px_rgba(75,35,30,0.08)] sm:p-9">
        <h1 className="text-center font-serif text-3xl font-semibold text-[#632d35]">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="mt-2 text-center text-sm text-[#66574e]">
          {mode === "login" ? "Sign in to see your orders and wishlist." : "Join AARANYA to track orders and save your wishlist."}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-lg bg-[#f3ece3] p-1" role="tablist">
          {(["login", "register"] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => { setMode(m); setErrors({}); setNotice(""); }}
              className={`rounded-md py-2 text-sm font-semibold transition ${
                mode === m ? "bg-[#632d35] text-white" : "text-[#632d35] hover:bg-white"
              }`}
            >
              {m === "login" ? "Login" : "Register"}
            </button>
          ))}
        </div>

        <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
          {mode === "register" && (
            <div>
              <label htmlFor="name" className="text-sm font-medium text-[#4d3b33]">Full name</label>
              <input id="name" name="name" autoComplete="name" className={input("name")} />
              {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
            </div>
          )}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-[#4d3b33]">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" className={input("email")} />
            {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-[#4d3b33]">Password</label>
            <input id="password" name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} className={input("password")} />
            {errors.password && <p className="mt-1 text-xs text-red-700">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full rounded-md bg-[#632d35] py-3 text-sm font-semibold text-white transition hover:bg-[#4f232a]">
            {mode === "login" ? "Login" : "Create account"}
          </button>
        </form>

        {notice && <p role="status" className="mt-4 rounded-md bg-[#f8f1e8] px-4 py-3 text-sm text-[#6b4a3b]">{notice}</p>}

        <p className="mt-6 text-center text-sm text-[#66574e]">
          <Link href="/collections" className="text-[#632d35] underline underline-offset-4">Continue shopping</Link>
        </p>
      </div>
    </main>
  );
}
