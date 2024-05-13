import './global.css';

export const metadata = {
  title: 'Welcome to Hypercare',
  description: 'Frontend Developer Challange',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-8">
        <h1 className="sticky top-0 flex flex-col pb-8 mb-8 text-6xl bg-gradient-to-t from-0% from-white/50 to-40% to-white">
          <span className="text-brand-secondary">Hypercare</span> {''}
          <span>Frontend Developer Coding Challenge</span>
        </h1>
        {children}
      </body>
    </html>
  );
}
