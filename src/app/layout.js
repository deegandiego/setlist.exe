import "./globals.css";

export const metadata = {
  title: "SETLIST.EXE",
  description: "Setlist manager for bands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}