"use client";

export default function Footer() {
  return (
    <>
      <footer className="py-20 sm:py-28 px-4 sm:px-6 text-center">
        <div className="mx-auto max-w-xl space-y-6">
          <p className="text-white text-base sm:text-lg font-light">
            Let&apos;s connect — or simply say hello.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <a
              href="mailto:lagani@example.com"
              className="text-white text-sm font-light underline underline-offset-2 hover:opacity-90 transition-opacity"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-light underline underline-offset-2 hover:opacity-90 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Lagani21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-light underline underline-offset-2 hover:opacity-90 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-white text-sm font-light underline underline-offset-2 hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
      <div className="py-6 text-center">
        <p className="text-white text-xs font-light opacity-90">
          Built with intention.
        </p>
      </div>
    </>
  );
}
