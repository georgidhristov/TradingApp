export default function Waitlist() {
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
          action="https://formspree.io/f/mykbkwpl"
          method="POST"
          className="flex flex-col sm:flex-row gap-4 p-2 bg-gray-100 dark:bg-[#121821] rounded-2xl"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            className="flex-1 px-4 py-3 rounded-xl bg-transparent outline-none border border-transparent focus:border-green-500 focus:invalid:border-red-500"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Get Early Access
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4">
          No spam. Just early access.
        </p>
      </div>
    </section>
  );
}
