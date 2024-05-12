import './global.css';

export const metadata = {
  title: 'Welcome to @hypercare/public',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-8">
        <h1 className="flex flex-col mb-8 text-6xl">
          <span className="text-brand-secondary">Hypercare</span> {''}
          <span>Frontend Developer Coding Challenge</span>
        </h1>
        {children}
      </body>
    </html>
  );
}
