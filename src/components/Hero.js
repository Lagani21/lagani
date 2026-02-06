"use client";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
        Lagani Patel
      </h1>
      <p className="mt-5 text-lg sm:text-xl text-white font-light max-w-md">
        I build intelligent systems, interactive applications, and data-driven solutions.
      </p>
      <p className="mt-4 text-sm sm:text-base text-white font-light max-w-sm">
        Code with intention. Ship with care.
      </p>
    </section>
  );
}
