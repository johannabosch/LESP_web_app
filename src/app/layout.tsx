// layout.tsx
import '@/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-full">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
