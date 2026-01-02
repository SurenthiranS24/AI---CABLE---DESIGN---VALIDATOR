export const metadata = {
  title: 'AI Cable Design Validator',
  description: 'AI-assisted IEC cable design validation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
