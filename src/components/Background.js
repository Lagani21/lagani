"use client";

export default function Background() {
  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <img
        src="/mountain_background.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}
