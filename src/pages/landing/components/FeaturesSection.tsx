export default function FeaturesSection() {
  const features = [
    {
      title: "Track Your Performance",
      desc: "See your equity curve, win rate, and key metrics in one place.",
      image: "src/assets/dashboard.png",
    },
    {
      title: "Understand Your Behavior",
      desc: "Identify overtrading and patterns that impact your results.",
      image: "src/assets/insight.png",
    },
    {
      title: "Everything in One Place",
      desc: "Auto-sync trades, track news, and manage risk without manual work.",
      image: "src/assets/futures.png",
    },
  ];

  return (
    <section className="px-6 py-24 bg-[#0B1220] text-gray-200">
      <div className="max-w-6xl mx-auto space-y-24">
        {features.map((f, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">{f.title}</h2>
              <p className="text-gray-400 text-lg">{f.desc}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                *Images are for demonstration purposes. The final product may
                differ slightly.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative group">
              {/* glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition" />

              <img
                src={f.image}
                alt={f.title}
                className="rounded-xl border border-gray-800 shadow-lg relative z-10 transform group-hover:scale-[1.02] transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
