import "../styles/globals.css"; // ✅ Ensure global styles are applied
import Navbar from "../components/Navbar"; // ✅ Import Navbar

// src/app/layout.jsx
export const metadata = {
  title: "Lagani Patel",
  description: "Portfolio of Lagani Patel",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100;300;400;500;700&display=swap"
        />
      </head>
      <body className="font-custom"><Navbar />{children}</body>
    </html>
  );
}
