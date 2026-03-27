export default function Value() {
  return (
    <section className="px-6 py-24 bg-gray-50 dark:bg-[#0f141a]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Turn Your Trading Into a Measurable System
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121821] border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Track Every Trade</h3>
            <p className="text-gray-500">
              Log entries, exits, risk, setups, and notes — all in one place.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#121821] border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Analyze Performance</h3>
            <p className="text-gray-500">
              See what works, what doesn’t, and where you lose money.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#121821] border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Improve With Data</h3>
            <p className="text-gray-500">
              Make decisions based on real stats — not emotions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}