import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <section id="waitlist" className="px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Start Trading With Clarity
        </h2>

        <p className="text-gray-500 mb-8">
          Join the waitlist and get early access.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 p-2 bg-gray-100 dark:bg-[#121821] rounded-2xl"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-transparent outline-none"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Join Waitlist
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4">
          No spam. Just early access.
        </p>
      </div>
    </section>
  );
}