import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alok Studio | Photography",
    template: "%s | Alok Studio",
  },
  description:
    "Alok Studio photography — beautiful moments, thoughtfully captured. View your private photo gallery after signing in.",
  metadataBase: new URL("https://example.com"),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="container nav">
              <Link className="brand" href="/" aria-label="Alok Studio home">
                Alok <span>Studio</span>
              </Link>
              <nav className="nav-links" aria-label="Main navigation">
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/login">Customer Login</Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="site-footer">
            <div className="container footer-inner">
              <span>© {new Date().getFullYear()} Alok Studio</span>
              <span>Moments captured. Memories preserved.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
