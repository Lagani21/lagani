import "../styles/globals.css";

export const metadata = {
  title: "Lagani Patel",
  description: "Lagani Patel — AI Software Engineer, Machine Learning, Data Science",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect so font request starts sooner — reduces wait for first paint */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@400;500;700&display=swap"
        />
      </head>
      <body className="font-custom">{children}</body>
    </html>
  );
}
