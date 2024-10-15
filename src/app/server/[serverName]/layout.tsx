export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen m-0 grid grid-cols-1 bg-[#DCFFFB]"> {children}</body>
    </html>
  );
}
