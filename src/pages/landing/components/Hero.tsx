import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";

export default function Hero() {
  const messages = [
    "Stop Trading Blind. Start Trading With Data.",
    "Better Trades Come From Better Data — Over Time.",
    "Consistent Trading Starts With Consistent Data.",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setAnimate(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-3xl text-center mx-auto">
        <img src={logo} alt="Tradevus" className="h-16 md:h-13 mx-auto mb-8" />

        {/* VUS = Value, Utility, Success */}

        {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
          You’re Not Losing Because of Strategy.
        </h1> */}

        <h1
          className={`text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight transform transition-all duration-500 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          {messages[index]}
        </h1>

        {/* <p className="text-lg text-gray-400 mb-4">
          Tradevus is where your trading data works for you.
        </p> */}

        <p className="text-gray-400 mb-8">
          Most traders fail because they don’t track, review, or understand
          their trades. Fix that — and your results change.
        </p>

        <a
          href="#waitlist"
          className="inline-block bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-green-500/20"
        >
          Get Early Access
        </a>

        <p className="text-xs text-gray-500 mt-3">tradevus.com</p>

        <p className="text-sm text-gray-400 mt-4">
          Built for forex, crypto, and stock traders
        </p>
      </div>
    </section>
  );
}
